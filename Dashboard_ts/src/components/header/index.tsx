

function Header() {
    return (
            <div className="w-full h-full bg-orange-400 flex justify-between items-center p-3">
            <div>HRDept Company</div>
            <div className="flex justify-center items-center gap-3">
                    <i className="hidden sm:flex fa-solid fa-bell text-2xl"></i>
                    <div className="hidden sm:flex sm:flex-col gap-1">
                        <p>HR Admin 1</p>
                        <p>Product Manager</p>
                    </div>
                    <i className="fa-solid fa-user-tie text-2xl"></i>
                </div>
            </div>
  );
}

export default Header;
