import { defaults } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='w-full h-36 bg-blue-500 p-3 flex items-center justify-between text-3xl text-white'>
            <div className="leading-10 py-12 text-6xl">HRDept Company</div>
            <div className="flex gap-10 justify-between items-center">
                <i className="fa-solid fa-bell text-4xl"></i>
                <div>
                    <p className="text-2xl">HR Admin 1</p>
                    <p className="text-xl" >Product Manager</p>
                </div>
                <i className="fa-solid fa-user-tie text-6xl"></i>
            </div>
        </div >
    )
}
export default Header;