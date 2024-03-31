import { logo } from "../assets";

const Navbar = () => {
    return (
        <div className="navbar bg-slate-500 w-full">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <img className="inline" src={logo} alt="..." />
                </a>
            </div>
            <div className="flex-none hidden sm:block">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a className="font-fraunces text-white">About</a>
                    </li>
                    <li>
                        <a className="font-fraunces text-white">Services</a>
                    </li>
                    <li>
                        <a className="font-fraunces text-white">Projects</a>
                    </li>
                    <li>
                        <a className="uppercase font-fraunces font-bold text-white">Contact</a>
                    </li>
                </ul>
            </div>
            <div>
                <button className="btn btn-square btn-ghost sm:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-5 h-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
