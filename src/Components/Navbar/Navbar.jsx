import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";


const Navbar = () => {
    const { user , logOut } = useContext(AuthContext)
    const  navigate = useNavigate()
    const handleLogout = () =>{
        logOut()
        .then(()=>{
            swal("Log out", "successful", "success")
            navigate('/')
        })

    }
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
                                    to="/allCategoryBooks"
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
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className="md:w-2/3 w-1/4" src="https://demo.fieldthemes.com/bookshop/demo1/home2/img/bookshophome2-logo-15381021172.jpg" alt="" />
                    </Link>
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
                                to="/allCategoryBooks"
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
                        {
                            user?.email ? 
                            <div className="dropdown dropdown-end z-[10]">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src={user?.photoURL } alt="User Photo" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="font-black ml-3">
                                    {user?.displayName}
                                </li>
                                <li><a href={`https://mail.google.com/`} target="_blank" rel="noopener noreferrer" >{user?.email}</a></li>
                                <li><button onClick={handleLogout} className="text-xl font-bold">Logout</button></li>
                            </ul>
                        </div>
                            : <button className="btn btn-warning text-xl font-bold normal-case btn-sm">


                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-blue-600" : ""
                                    }
                                >
                                    Login
                                </NavLink>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;