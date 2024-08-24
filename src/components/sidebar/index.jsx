
import { Link } from "react-router-dom";
import { dashboard_navigation } from "../../features/ulti/navi";

const linkClasses = 'w-full flex items-center justify-center gap-2 font-light';

function Sidebar() {
    return (
        <div className='hidden sm:flex cols-span-1 bg-blue-400 w-full h-full sm:flex-col'>
            <div className="flex flex-col items-center gap-8 text-lg mt-10">
                <div className="w-5/6 py-7 h-9 bg-white rounded-2xl flex flex-col justify-center items-center gap-1">
                    <i className='pt-2 fa-solid fa-chalkboard-user lg:text-md'></i>
                    <div className="md:hidden lg:block lg:text-md text-center lg:pb-1">Dashboard</div>
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
