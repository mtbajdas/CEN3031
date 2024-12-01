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


const ClubBox = (props) => {
    const navigate = useNavigate();

    const clubPageNavigate = () => {
        navigate(`/clubs/${props.clubName}`)
    }
   
    return (
        <div className="bg-slate-100 p-8 rounded-md grid place-items-center max-w-96 w-80 m-8">
            <h1 className="text-3xl text-slate-700 pb-4">{props.clubName}</h1>
            <button className="m-2 bg-slate-700 active:bg-black hover:bg-slate-900"
            onClick={clubPageNavigate}>Add
            </button>
        </div>
    );
}

export default ClubBox;