import Sidebar from "../sidebar";
import Header from "../header";
import Users from "../../features/pages/users/components/index";

function Layout() {
    return (
        <div className="grid grid-cols-12 h-screen w-screen">
            <Sidebar />
            <div className="col-start-2 col-end-13 w-full h-full grid grid-rows-12">
                <Header />
                <Users />
            </div>
        </div>
    )
}

export default Layout;