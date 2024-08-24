import { useState } from 'react';
import Pagination from './pagination';
import AddUserForm from './addUserForm';
import * as XLSX from 'xlsx';

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(10);
    const [usersData, setUsersData] = useState(Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        email: `email${i + 1}@gmail.com`,
        phoneNumber: `0911${String(i).padStart(6, '0')}`,
        firstName: `Firstname${i + 1}`,
        lastName: `Lastname${i + 1}`,
        role: 'User',
    })));
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
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

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
        setShowAddUserForm(!showAddUserForm);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilterRoleChange = (e) => {
        setFilterRole(e.target.value);
        setCurrentPage(1);
    };

    const onSubmitProp = (user) => {
        setUsersData((usersData) => [...usersData, user]);
    };

    return (
        <>
            <div className='bg-white col-start-2 col-end-13  w-full h-full flex justify-center items-center'>
                <div className='bg-blue-400 w-full sm:w-5/6 h-full sm:h-5/6 rounded-3xl p-3 grid gap-3 items-center'>
                    <div className='w-full flex sm:flex-row justify-between items-center'>
                        <div className='text-white w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0'>User</div>
                        <div className='w-full sm:w-1/2 lg:w-1/4 flex justify-between sm:justify-center items-center gap-1 text-blue-500'>
                            <button className='p-1 bg-white rounded-lg w-2/5 text-xs sm:text-sm md:text-base' onClick={exportToExcel}>
                                Export to Excel
                            </button>
                            <button className='p-1 bg-white rounded-lg w-2/5 text-xs sm:text-sm md:text-base' onClick={toggleFormProp}>
                                {showAddUserForm ? 'Cancel' : 'Add New User'}
                            </button>
                        </div>
                    </div>

                    <div className='w-full flex sm:flex-row justify-center items-center gap-1'>
                        <input className='rounded-lg p-2 w-full sm:w-1/2 lg:w-1/3 text-xs sm:text-sm md:text-base'
                            type="text"
                            placeholder="Search by email, first name, last name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <select className='rounded-lg px-2 py-2  text-blue-500 w-full sm:w-1/4 lg:w-1/6 text-xs sm:text-sm md:text-base'
                            value={filterRole}
                            onChange={handleFilterRoleChange}
                        >
                            <option value="">All Roles</option>
                            <option value="User">User</option>
                            <option value="Admin">Admin</option>
                        </select>

                        <button className='bg-white px-2 py-2 rounded-lg text-blue-500 w-full sm:w-1/4 lg:w-1/6 text-xs sm:text-sm md:text-base' onClick={exportToExcel}>
                            Search
                        </button>
                    </div>

                    <div className="w-full h-full flex justify-between overflow-auto">
                        <div className="w-full overflow-auto">
                            <table className='min-w-full text-white text-xs sm:text-sm md:text-base'>
                                <thead className='table-header-group'>
                                    <tr>
                                        <th className='px-4 py-2'>No</th>
                                        <th className='px-4 py-2'>Email</th>
                                        <th className='px-4 py-2'>Phone Number</th>
                                        <th className='px-4 py-2'>First Name</th>
                                        <th className='px-4 py-2'>Last Name</th>
                                        <th className='px-4 py-2'>Role</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((user, index) => (
                                        <tr key={user.id} className="table-row">
                                            <td className='table-cell px-4 py-2'>{indexOfFirstUser + index + 1}</td>
                                            <td className='table-cell px-4 py-2'>{user.email}</td>
                                            <td className='table-cell px-4 py-2'>{user.phoneNumber}</td>
                                            <td className='table-cell px-4 py-2'>{user.firstName}</td>
                                            <td className='table-cell px-4 py-2'>{user.lastName}</td>
                                            <td className='table-cell px-4 py-2'>{user.role}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='w-full flex sm:flex-row justify-end items-center gap-1 sm:gap-3'>
                        <div className='text-white text-xs sm:text-sm md:text-base'>
                            {indexOfFirstUser + 1}-{indexOfLastUser} of {filteredUsers.length}
                        </div>

                        <div className='flex justify-between items-center text-xs sm:text-sm md:text-base'>
                            <label htmlFor="usersPerPage" className='text-white mr-2'>Rows per page: </label>
                            <select className="rounded-md text-blue-400" value={usersPerPage} onChange={handleUsersPerPageChange}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                                <option value={20}>20</option>
                            </select>
                        </div>

                        <div className='text-xs sm:text-sm md:text-base'>
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
