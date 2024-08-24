import Sidebar from "../sidebar";
import Header from "../header";
import Users from "../../features/pages/users/components/index";

function Layout() {
    return (
        <div className="flex flex-col items-center gap-y-8 h-screen w-screen">
            <div className="w-full max-h-8 sm:max-h-16 grid grid-rows-12">
                <Header />
            </div>
            <div className="flex-1 w-5/6 h-5/6 sm:w-screen sm:h-full flex sm:grid sm:grid-cols-12">
                <Sidebar />
                <Users />
            </div>
        </div>
    )
}

export default Layout;