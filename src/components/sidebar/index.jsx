import { defaults } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";
import { dashboard_navigation } from "../../features/ulti/navi";
import logo from '../../assets/img/logo.png'

const linkClasses = 'w-full flex items-center justify-center gap-2 font-light hover:bg-orange'
function Sidebar() {
    return (
        <div className='bg-black w-60 flex flex-col'>
            <div className="w-full h-36 flex items-center justify-center">
                <img className="w-52 h-auto" src={logo} alt="logo" />
            </div>
            <div className="flex-1 flex flex-col items-center gap-8 text-2xl pt-10" >
                <div className="w-4/5 h-9 bg-white rounded-2xl flex justify-center items-center gap-4">
                    <i className='text-[#e65f2b] fa-solid fa-chalkboard-user'></i>
                    <div className="text-[#e65f2b] text-center">Dashboard</div>
                </div>
                <div className="w-full text-white">
                    {dashboard_navigation.map((item) => (
                        <Navigation_link key={item.key} item={item} />
                    ))}
                </div>
            </div>
        </div >
    )
}
export default Sidebar;

function Navigation_link({ item }) {
    return (
        <Link to={item.path} className={linkClasses}>
            <span className={item.className}>
                <i className={item.icon}></i>
                {item.label}
            </span>
        </Link>
    )
}


