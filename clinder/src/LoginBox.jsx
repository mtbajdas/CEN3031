import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';


const LoginBox = () => {
    const navigate = useNavigate();
    const {register} = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [signedIn, setSignedIn] = useState(false);
    
    // Instantiate the auth service SDK
    const auth = getAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // Sign in with email and password in firebase auth service
        console.log(email);
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        // The signed-in user info
        const user = userCredential.user;
        if(user) {
            setSignedIn(true);
            return redirect("/home");
        }
        } catch (err) {
        // Handle Errors here.
        const errorMessage = err.message;
        const errorCode = err.code;

        setError(true);
        console.log(errorCode)

        switch (errorCode) {
            case "auth/invalid-email":
            setErrorMessage("This email address is invalid.");
            break;
            case "auth/user-disabled":
            setErrorMessage(
                "This email address is disabled by the administrator."
            );
            break;
            case "auth/user-not-found":
            setErrorMessage("This email address is not registered.");
            break;
            case "auth/wrong-password":
            setErrorMessage("The password is invalid or the user does not have a password.")
            break;
            default:
            setErrorMessage(errorMessage);
            break;
        }
        }
    };

    return (
        
        <div className="bg-slate-100 p-8 rounded-md grid place-items-center max-w-96">
            {signedIn && navigate("/home")}
            <h1 className="text-3xl text-slate-700 pb-4">Login: </h1>
            <form className="grid" onSubmit={handleSubmit}>
                <input className="rounded-sm m-2 p-1" placeholder='email@mail.com' name='email' onChange={handleChange}/>
                <input className="rounded-sm m-2 p-1" placeholder='password'name='password' onChange={handleChange}/>
                <button type='submit' className="m-2 bg-slate-700 active:bg-black hover:bg-slate-900">Submit</button>
                {error && <p className="text-slate-700 pb-4">{errorMessage}</p>}
            </form>
            <p>New? Create account</p>
        </div>
    );
}

export default LoginBox;