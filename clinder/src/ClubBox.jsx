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
import React, { useState, useEffect } from "react";
import { auth } from "./firebase"; 
import ToggleClub from "./ToggleClub";



const ClubBox = ({ clubName, clubDesc, userId }) => {
    const [user, setUser] = useState("");
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((data) => {
        setUser(data);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <div className="bg-slate-100 p-6 rounded-md flex flex-col items-center max-w-xs w-64 m-4 shadow-md">
        <h1 className="text-lg font-bold text-slate-700 text-center overflow-hidden text-ellipsis whitespace-nowrap">
          {clubName}
        </h1>
        <p className="text-sm text-slate-500 mt-2 text-center">{clubDesc}</p>
        <div className="w-full mt-4">
          <ToggleClub clubName={clubName} userId={user?.uid || userId} />
        </div>
      </div>
    );
  };
  
  export default ClubBox;