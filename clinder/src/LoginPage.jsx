import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { useForm } from 'react-hook-form'
import LoginBox from './LoginBox'
import CreateAccount from './CreateAccount';

const LoginPage = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (

        <div>
        <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">Clinder</h1>
            <div className="items-center flex h-screen justify-center">
                <LoginBox className="items-center h-screen justify-center"/>
            </div>
        </div>

    );
}

export default LoginPage;