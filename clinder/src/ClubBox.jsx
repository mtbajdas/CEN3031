import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import Home from './Home';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import ToggleClub from './ToggleClub';
import { auth } from './firebase';
import { useEffect } from 'react';


const ClubBox = (props) => {
    const [user, setUser] = useState('')
    useEffect(()=>{
        auth.onAuthStateChanged((data)=>{
            setUser(data);
        })
    },[])
    const navigate = useNavigate();
    const pageTransport = () => {
        navigate(`/clubs/${props.clubName}`);
    };
  
    return (
        
        <div onClick = {pageTransport} className="bg-slate-100 p-6 rounded-md flex flex-col items-center max-w-xs w-64 m-4 shadow-md">
            <h1 className="text-lg font-bold text-slate-700 text-center overflow-hidden text-ellipsis whitespace-nowrap w-full">{props.clubName}</h1>
            <div className="w-full mt-4">
                <ToggleClub clubName={props.clubName} userId={user.uid}/>
            </div>
        </div>
    );
}

export default ClubBox;