import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Adjust path to your firebase config
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

const ToggleClub = ({ userId, clubName }) => {
  const [isClubSelected, setIsClubSelected] = useState(false);
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        // Reference to the user's document in Firestore
        const userDocRef = doc(db, 'users', userId);

        // Get the user document
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          // Use an empty array if the 'clubs' field doesn't exist
          const userClubs = userDoc.data().clubs || [];
          setClubs(userClubs); // Set the clubs in state
          if(userClubs.includes(clubName))
            setIsClubSelected(true);
          console.log("Clubs from Firestore:", userClubs); // Or log them
        } else {
          console.log('No user document found.');
        }
      } catch (error) {
        console.error('Error fetching clubs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, [userId]);

  
  const toggleClub = async () => {
    const userDocRef = doc(db, 'users', userId);

    try {
      // Fetch the user's current profile to check if the club is already added
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        const userClubs = userData.clubs || [];

        if (userClubs.includes(clubName)) {
          // If club is already in the list, remove it
          await updateDoc(userDocRef, {
            clubs: arrayRemove(clubName),
          });
          setIsClubSelected(false); // Update UI
        } else {
          // If club is not in the list, add it
          await updateDoc(userDocRef, {
            clubs: arrayUnion(clubName),
          });
          setIsClubSelected(true); // Update UI
        }
      }
    } catch (error) {
      console.error('Error updating club:', error);
      alert('There was an error updating your profile.');
    }
  };

  return (
    <div>
      <button
        onClick={toggleClub}
        className={`w-full py-2 px-4 rounded focus:outline-none ${isClubSelected ? 'bg-red-600' : 'bg-blue-600'} text-white py-2 px-4 rounded overflow-hidden text-ellipsis whitespace-nowrap w-full`}
      >
        {isClubSelected ? `Remove ${clubName}` : `Add ${clubName}`}
      </button>
    </div>
  );
};

export default ToggleClub;
