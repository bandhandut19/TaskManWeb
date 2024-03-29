import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext ,auth} from "../Providers/AuthProvider";
import { signOut } from "firebase/auth";

// theme color: 
// primary: bg-purple-200
// login/register: bg-purple-700 , text-yellow-300

const Navbar = () => {
    const {userInfo} = useContext(AuthContext)
    const {user}= userInfo
    const handleLogout = ()=>{
        signOut(auth)
    }
    return (
        <div className="navbar bg-purple-200 mt-5 lg:px-10 px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className="py-2">Task List</li>
                        <li className="py-2">Create Task</li>
                        <li className="py-2">Dashboard</li>
                    </ul>
                </div>
                <Link className="text-xl font-bold" to='/'>TaskMan</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="px-6 cursor-pointer"><NavLink to='/tasklist'>Task List</NavLink></li>
                    <li className="px-6 cursor-pointer"><NavLink to='/createtask'>Create Task</NavLink></li>
                    <li className="px-6 cursor-pointer"><NavLink to='/'>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?  <Link to="/" onClick={handleLogout} className="lg:text-xl border-2 border-purple-700 px-3">LogOut</Link> :  <Link to="/login" className="lg:text-xl border-2 border-purple-700 px-3">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;