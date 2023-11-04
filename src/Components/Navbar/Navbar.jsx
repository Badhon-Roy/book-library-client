import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="bg-red-400">
            <div className="navbar max-w-[1200px] mx-auto md:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/addBook"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                                    }
                                >
                                    Add Book
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/allBooks"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                                    }
                                >
                                    All Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/borrowedBooks"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                                    }
                                >
                                    Borrowed Books
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-7 text-xl font-bold">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addBook"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600" : ""
                                }
                            >
                                Add Book
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allBooks"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600" : ""
                                }
                            >
                                All Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/borrowedBooks"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600" : ""
                                }
                            >
                                Borrowed Books
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        <button className="btn btn-warning text-xl font-bold normal-case btn-sm">


                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-blue-600" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;