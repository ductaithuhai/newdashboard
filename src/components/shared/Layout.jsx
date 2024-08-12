import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";

function Layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen">
            <Sidebar />
            <Header />
        </div>
    )
}

export default Layout;