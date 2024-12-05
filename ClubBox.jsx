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
    function validName(name) {
        // Loop through each character in the name
        let validName = name.split('').map(c => {
          // If the character is not a letter, digit, or underscore, replace it with '_'
          if (!/[a-zA-Z0-9_]/.test(c)) {
            return '_';
          }
          return c;
        }).join('');
        // Trim the name to a maximum length of 254 characters
        validName = validName.slice(0, 254);
      
        return validName;
      }
    const navigate = useNavigate();
    const pageTransport = () =>{
        navigate(`/clubs/${validName(props.clubName)}`);
    };


    return (
        
        <div onClick = {pageTransport} className="bg-slate-100 p-8 rounded-md grid place-items-center max-w-96 w-80 m-8">
            <h1 className="text-xl text-center text-slate-700 pb-4">{props.clubName}</h1>
            
            <button className="m-2 bg-slate-500 active:bg-black hover:bg-slate-700">Add</button>
        </div>
    );
}

export default ClubBox;