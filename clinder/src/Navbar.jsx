import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

import { doSignOut } from './auth'

const Navbar = ({ user }) => {
    // const navigate = useNavigate()
    // const { userLoggedIn } = useAuth()
    return(
        <div className="bg-gray-900 w-full items-center flex h-20 justify-center">
            <Link className="p-14 font-bold text-slate-300 border-r-0" to="/">Login</Link>
            <Link className="p-14 font-bold text-slate-300" to="/create-account">Sign Up</Link>
            {user && (
                <>
                    <Link className="p-14 font-bold text-slate-300" to="/home">Home</Link>
                    <Link className="p-14 font-bold text-slate-300" to="/profile">Profile</Link>
                </>
            )}
        </div>

    );
}

export default Navbar;