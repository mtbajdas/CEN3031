import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";

const LoginBox = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [resetEmailSent, setResetEmailSent] = useState(false);

    // Instantiate Firebase Auth
    const auth = getAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError(false); // Clear previous errors
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (user) navigate("/home");
        } catch (err) {
            setError(true);
            switch (err.code) {
                case "auth/invalid-email":
                    setErrorMessage("This email address is invalid.");
                    break;
                case "auth/user-not-found":
                    setErrorMessage("No account found for this email address.");
                    break;
                case "auth/wrong-password":
                    setErrorMessage("Incorrect password.");
                    break;
                default:
                    setErrorMessage(err.message);
                    break;
            }
        }
    };

    const handlePasswordReset = async () => {
        if (!email) {
            setErrorMessage("Please enter your email address to reset your password.");
            setError(true);
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setResetEmailSent(true);
            setError(false);
        } catch (err) {
            setError(true);
            setErrorMessage("Failed to send password reset email.");
            console.error(err);
        }
    };

    return (
        <div className="bg-slate-100 p-8 rounded-md grid place-items-center max-w-96">
            <h1 className="text-3xl text-slate-700 pb-4">Login</h1>
            <form className="grid" onSubmit={handleSubmit}>
                <input
                    className="rounded-sm m-2 p-1"
                    placeholder="email@mail.com"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    className="rounded-sm m-2 p-1"
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
                <button type="submit" className="m-2 bg-slate-700 active:bg-black hover:bg-slate-900 text-white p-2 rounded">
                    Submit
                </button>
                {error && <p className="text-red-500">{errorMessage}</p>}
            </form>
            {resetEmailSent && (
                <p className="text-green-500">Password reset email sent to your inbox!</p>
            )}
            <button
                onClick={handlePasswordReset}
                className="m-2 bg-slate-700 active:bg-black hover:bg-slate-900 text-white p-2 rounded"
            >
                Forgot Password?
            </button>
            <p className="text-blue-500 bold">New? <a href="/create-account" className="text-blue-500 underline">Create account</a></p>
            </div>
    );
};

export default LoginBox;
