import { defaults } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='rows-span-1'>
            <div className='min-h-36 max-h-36 px-10 pt-1 bg-blue-400 flex items-center justify-between text-white'>
            <div className="leading-10 text-4xl">HRDept Company</div>
            <div className="flex gap-10 justify-between items-center">
                <i className="fa-solid fa-bell text-3xl"></i>
                <div>
                    <p className="text-2xl">HR Admin 1</p>
                    <p className="text-xl" >Product Manager</p>
                </div>
                <i className="fa-solid fa-user-tie text-4xl"></i>
            </div>
            </div>
        </div >
    )
}
export default Header;