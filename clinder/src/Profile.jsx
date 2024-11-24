import React from 'react'
import { auth } from './firebase';

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
    return (
        <div>
            <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">Profile</h1>
            
        
        </div>
    )
}

export default Profile;