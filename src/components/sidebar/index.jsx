import React from "react";
import { Link } from "react-router-dom";
import { dashboard_navigation } from "../../features/ulti/navi";
import logo from '../../assets/img/logo.png';

const linkClasses = 'w-full flex items-center justify-center gap-2 font-light';

function Sidebar() {
    return (
        <div className='hidden sm:flex col-span-1 bg-blue-400 w-full h-full flex flex-col'>
            <div className="flex-1 flex flex-col items-center gap-8 text-lg mt-10">
                <div className="w-4/5 p-7 h-9 bg-white rounded-2xl flex justify-center items-center gap-4">
                    <i className='fa-solid fa-chalkboard-user'></i>
                    <div className="md:hidden lg:block text-center">Dashboard</div>
                </div>
                <div className="w-full text-white">
                    {dashboard_navigation.map((item) => (
                        <NavigationLink key={item.key} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function NavigationLink({ item }) {
    return (
        <Link to={item.path} className={`hover:bg-blue-300 ${linkClasses}`}>
            <span className={item.className}>
                <i className={`${item.icon}`}></i>
                <span className="hidden lg:block">{item.label}</span>
            </span>
        </Link>
    );
}

export default Sidebar;
