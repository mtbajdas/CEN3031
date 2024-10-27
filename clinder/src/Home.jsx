import React from 'react'
import { auth } from './firebase';

const Home = (email) => {
    getAuth()
    .getUserByEmail(email)
    .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
        console.log('Error fetching user data:', error);
    });
    return (
        <div>
            <p>{auth.name}</p>
        </div>
    )
}

export default Home;