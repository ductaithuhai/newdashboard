import React, { useState } from 'react';
import Pagination from './pagination';
import AddUserForm from './addUserForm';
import * as XLSX from 'xlsx';

const usersData = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    email: `email${i + 1}@gmail.com`,
    phoneNumber: `0911${String(i).padStart(6, '0')}`,
    firstName: `Firstname${i + 1}`,
    lastName: `Lastname${i + 1}`,
    role: 'User',
}));

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);
    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('');

    const filteredUsers = usersData.filter(user =>
        (user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterRole ? user.role === filterRole : true)
    );

    const totalPages = Math.ceil(usersData.length / usersPerPage);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = usersData.slice(indexOfFirstUser, indexOfLastUser);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToFirstPage = () => {
        setCurrentPage(1);
    };

    const goToLastPage = () => {
        setCurrentPage(totalPages);
    };

    const handleUsersPerPageChange = (e) => {
        setUsersPerPage(Number(e.target.value));
        setCurrentPage(1);
    };


    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(usersData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Users");
        XLSX.writeFile(wb, "users.xlsx");
    };

    const toggleFormProp = () => {
        console.log("truoc:", showAddUserForm);
        setShowAddUserForm(!showAddUserForm);
        console.log("sau:", !showAddUserForm);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilterRoleChange = (e) => {
        setFilterRole(e.target.value);
        setCurrentPage(1);
    };

    const onSubmitProp = (data) => {
        console.log('New User:', data);
        // Add the new user to the list or send it to the backend
    };

    return (
        <>
            <div className='bg-white w-full h-full flex justify-center items-center'>
                <div className='bg-blue-400 w-5/6 h-5/6 rounded-3xl p-5 grid gap-3 items-center'>
                    <div className='flex justify-between items-center'>
                        <div className='text-white text-5xl font-bold'>User</div>
                        <div className='w-1/4 flex justify-center items-center gap-5 text-blue-500'>
                            <button className='p-2 bg-white rounded-lg' onClick={exportToExcel}>
                                Export to Excel
                            </button>
                            <button className='p-2 bg-white rounded-lg' onClick={toggleFormProp}>
                                {showAddUserForm ? 'Cancel' : 'Add New User'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-start gap-3'>
                        <input className='rounded-lg p-2'
                            type="text"
                            placeholder="Search by email, first name, last name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select className='rounded-lg px-2 text-blue-500' value={filterRole} onChange={handleFilterRoleChange}>
                            <option value="">All Roles</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>

                        <button className='bg-white px-2 rounded-lg text-blue-500' onClick={exportToExcel}>
                            Search
                        </button>
                    </div>

                    <div className="w-full h-full flex justify-between overflow-auto">
                        <div className="w-full overflow-auto">
                            <table className='w-full h-full text-white'>
                                <thead className='w-full text-left'>
                                    <tr>
                                        <th className='flex justify-start'>No</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{indexOfFirstUser + index + 1}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phoneNumber}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-end items-center gap-3'>
                        <div className='text-white'>
                            {indexOfFirstUser + 1}-{indexOfLastUser} of {usersData.length}
                        </div>

                        <div className='usetable'>
                            <label htmlFor="usersPerPage" className='text-white'>Rows per page: </label>
                            <select className="rounded-md text-blue-400" value={usersPerPage} onChange={handleUsersPerPageChange}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>

                        <div>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                goToNextPage={goToNextPage}
                                goToPrevPage={goToPrevPage}
                                goToFirstPage={goToFirstPage}
                                goToLastPage={goToLastPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {showAddUserForm && (
                <AddUserForm onSubmit={onSubmitProp} toggleForm={toggleFormProp} />
            )}
        </>

    );
};

export default Users;