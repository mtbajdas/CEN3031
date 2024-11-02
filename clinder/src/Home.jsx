import React from 'react'
import { auth } from './firebase';
import ClubBox from './ClubBox';

const Home = () => {
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
            <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">Welcome!</h1>
            <h2 className="text-2xl p-11 font-semibold text-slate-300 items-center flex justify-center">Add clubs:</h2>
            <div className="flex justify-center">
                <ClubBox clubName="UF ACM"/>
                <ClubBox clubName="WICSE"/>
                <ClubBox clubName="SHPE"/>
            </div>
        </div>
    )
}

export default Home;