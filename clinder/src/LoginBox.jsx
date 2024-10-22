import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { useForm } from 'react-hook-form'


const LoginBox = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="bg-slate-100 p-8  rounded-md">
            <h1 className="text-3xl text-slate-700 pb-4">Login: </h1>
            <form className="grid place-items-center" onSubmit={handleSubmit(onsubmit)}>
                <input className="rounded-sm m-2 p-0.5" placeholder='name' {...register("username")}/>
                <input className="rounded-sm m-2 p-0.5" placeholder='email@mail.com'{...register("email")}/>
                <button className="m-2 bg-slate-700 active:bg-black hover:bg-slate-900">Submit</button>
            </form>
        </div>
    );
}

export default LoginBox;