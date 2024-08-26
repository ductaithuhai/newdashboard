import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { dashboard_navigation } from "./navi";

const linkClasses = 'w-full flex items-center justify-center gap-2 font-light';

function Sidebar(){
    return(
        <div className="w-24 h-full bg-indigo-600 flex flex-col">
            <div className="w-full h-16 bg-indigo-800 flex justify-center items-center">
                <div>
                    <img className="hidden lg:block w-full h-full object-contain" src={logo} alt="logo" />
                </div>
                <div className="lg:hidden h-16 w-full bg-teal-600 flex items-center justify-center">
                    <i className="leading-10 fa-solid fa-bars sm:text-4xl text-2xl" />
                </div>
            </div>

                <div className="flex-1 w-full h-full">
                    <div>
                        <i className='fa-solid fa-chalkboard-user'></i>
                        <div>Dashboard</div>
                    </div>
                    <div>
                        {dashboard_navigation.map((item) => (
                            <NavigationLink key={item.key} item={item} />
                        ))}
                    </div>
                </div>
        </div>
    )

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

}

export default Sidebar;