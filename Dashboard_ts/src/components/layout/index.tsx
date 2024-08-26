import Header from "../header";
import Sidebar from "../sidebar";
import Users from "../../features/Users";

function Layout() {
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="hidden w-24 h-full bg-orange-400 sm:flex sm:flex-col sm:justify-between sm:items-center">
          <Sidebar />
        </div>
        <div className="flex-1 w-full flex flex-col">
          <div className="w-full h-16 bg-lime-400">
            <Header />
          </div>
          <div className="w-full h-full flex justify-center items-center bg-blue-400">
            <div className="w-5/6 h-5/6 bg-red-400">
              <Users />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
