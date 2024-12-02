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

    return (
        
        <div className="bg-slate-100 p-8 rounded-md grid place-items-center max-w-96 w-80 m-8">
            <h1 className="text-3xl text-slate-700 pb-4">{props.clubName}</h1>
            
            <ToggleClub clubName={props.clubName} userId={user.uid}/>
        </div>
    );
}

export default ClubBox;