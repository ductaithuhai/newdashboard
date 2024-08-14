import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Header from "../header";
import Dashboard from "../dashboard";
import Users from "../../features/pages/users/components/index";

function Layout() {
    return (
        <div className="flex flex-row h-screen w-screen">
            <Sidebar />
            <div className="w-full h-full flex flex-col flex-1">
                <Header />
                <Users />
            </div>
        </div>
    )
}

export default Layout;