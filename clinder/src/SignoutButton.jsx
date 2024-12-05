import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const SignoutButton = () => {
    const nav = useNavigate();
    const auth = getAuth();

    const handleSignout = async () => {
        try {
            await signOut(auth);
            nav('/');
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <button onClick={handleSignout} className="ml-auto bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded shadow-sm">
            Sign Out
        </button>
    );
};

export default SignoutButton;
