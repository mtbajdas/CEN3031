import React from 'react'
import { auth } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import PreferencesForm from './PreferencesForm';

const Profile = () => {
    // getAuth()
    // .getUserByEmail(email)
    // .then((userRecord) => {
    //     // See the UserRecord reference doc for the contents of userRecord.
    //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    // })
    // .catch((error) => {
    //     console.log('Error fetching user data:', error);
    // });
    const [user, setUser] = useState('')


    useEffect(()=>{
        auth.onAuthStateChanged((data)=>{
            setUser(data);
        })
    },[])
    return (
        <div>
            <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">{user.email}'s Profile</h1>
            <div className="flex flex-col md:flex-row gap-4 p-4">
                <div className="flex-1 bg-slate-100 text-slate-700 p-4 rounded-md shadow-md">
                    <h2 className="text-lg font-bold">Preferences</h2>
                    <p>Set preferences here!</p>
                    <PreferencesForm userId={user.uid}/>
                </div>

                <div className="flex-1 bg-slate-100 text-slate-700 p-4 rounded-md shadow-md">
                <h2 className="text-lg font-bold">Added Clubs</h2>
                <p>See your added clubs here!</p>
                </div>
            </div>
        
        </div>
    )
}

export default Profile;