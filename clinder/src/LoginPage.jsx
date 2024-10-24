import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { useForm } from 'react-hook-form'
import LoginBox from './LoginBox'

// FIREBASE INFO
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLDrfus0XqnwTdaEdmKTpHUkvzrmNcBpo",
  authDomain: "clinder-e1ae6.firebaseapp.com",
  projectId: "clinder-e1ae6",
  storageBucket: "clinder-e1ae6.appspot.com",
  messagingSenderId: "784562549864",
  appId: "1:784562549864:web:45ce4ae4832ab050e577dd",
  measurementId: "G-SWDK9BSM71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1 className="text-5xl p-20 font-semibold text-slate-300">Clinder</h1> 
            <LoginBox/>
        </div>

    );
}

export default LoginPage;