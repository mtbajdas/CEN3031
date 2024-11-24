import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
    const {register} = useForm();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [accountCreated, setAccountCreated] = useState(false);
    const navigate = useNavigate();

    const auth = getAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // create a new user with email and password
        console.log(email);
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        // Pull out user's data from the userCredential property
        const user = userCredential.user;
        if(user)
        {
            setAccountCreated(true);
        }
        } catch (err) {
        // Handle errors here
        const errorMessage = err.message;
        const errorCode = err.code;

        setError(true);

        switch (errorCode) {
            case "auth/weak-password":
            setErrorMessage("The password is too weak.");
            break;
            case "auth/email-already-in-use":
            setErrorMessage(
                "This email address is already in use by another account."
            );
            case "auth/invalid-email":
            setErrorMessage("This email address is invalid.");
            break;
            case "auth/operation-not-allowed":
            setErrorMessage("Email/password accounts are not enabled.");
            break;
            default:
            setErrorMessage(errorMessage);
            break;
        }
        }
    };

    return (
        <div>
        <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">Clinder</h1>
        <div className="items-center flex justify-center">
            
        <div className="bg-slate-100 p-8  rounded-md">
            <h1 className="text-3xl text-slate-700 pb-4">Create Account: </h1>
            <form className="grid place-items-center" onSubmit={handleSubmit}>
                <input className="rounded-sm m-2 p-1" placeholder='email@mail.com' onChange={handleChange} name='email' value={email}/>
                <input className="rounded-sm m-2 p-1" placeholder='password' onChange={handleChange} name='password' value={password}/>
                <button className="m-2 bg-slate-700 active:bg-black hover:bg-slate-900" type='submit'>Submit</button>
                {error && <p className="text-slate-700 pb-4">{errorMessage}</p>}
                {accountCreated && navigate("/home")}
            </form>
        </div>
        </div>
        </div>
    );
}

export default CreateAccount;