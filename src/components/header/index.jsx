import logo from '../../assets/img/logo.png';
function Header() {
    return (
        <div className='max-h-8 sm:max-h-16 grid grid-cols-12'>
            <div className="col-span-1 flex justify-between">
                <div className="bg-blue-900 w-full h-full flex items-center justify-center md:hidden sm:hidden lg:block" >
                    <img className="h-8 sm:h-full object-contain" src={logo} alt="logo" />
                </div>
                <div className="bg-blue-900 w-full h-8 sm:h-full flex items-center justify-center text-center text-justify-center md:flex sm-flex lg:hidden">
                    <i className="fa-solid fa-bars md:h-full sm:h-full text-white text-xl sm:text-4xl leading-10 p-3" alt="menu icon" />
                </div>
            </div>
            <div className='col-start-2 col-end-13 px-10 pt-1 bg-blue-400 flex items-center justify-between text-white'>
                <div className="leading-10 text-xl sm:text-4xl">HRDept Company</div>
                <div className="flex gap-10 justify-between items-center">
                    <i className="hidden sm:block fa-solid fa-bell text-3xl"></i>
                    <div>
                        <p className="hidden sm:block text-2xl">HR Admin 1</p>
                        <p className="hidden sm:block text-xl" >Product Manager</p>
                    </div>
                    <i className="fa-solid fa-user-tie text-4xl"></i>
                </div>
            </div>
        </div >
    )
}
export default Header;