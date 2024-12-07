import React from 'react'
import { auth } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import PreferencesForm from './PreferencesForm';
import ClubsForm from './ClubsForm';
import SignoutButton from './SignoutButton';



const Profile = () => {
  const [user, setUser] = useState("");
  const [notRecommendedClubs, setNotRecommendedClubs] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (data) => {
      setUser(data);
      if (data) {
        localStorage.setItem("uid", data.uid);
        const userDocRef = doc(db, "users", data.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setNotRecommendedClubs(userDoc.data().notRecommendedClubs || []);
        }
      }
    });
  }, []);

  const handleRemoveNotRecommended = async (clubName) => {
    try {
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        notRecommendedClubs: arrayRemove(clubName),
      });
      setNotRecommendedClubs((prev) => prev.filter((club) => club !== clubName));
    } catch (error) {
      console.error("Error removing not recommended club:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-end p-4">
        <SignoutButton />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-5xl p-11 pl-24 font-semibold text-slate-300 items-center flex justify-center">
          {user?.email}'s Profile
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="flex-1 bg-slate-100 text-slate-700 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Preferences</h2>
          <p>Set preferences here!</p>
          <PreferencesForm userId={user?.uid} />
        </div>

        <div className="flex-1 bg-slate-100 text-slate-700 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold">Added Clubs</h2>
          <p>See your added clubs here!</p>
          <ClubsForm userId={user?.uid} />
          <div className="mt-6">
            <h2 className="text-lg font-bold">Clubs Not Recommended</h2>
            <ul className="mt-2">
              {notRecommendedClubs.length > 0 ? (
                notRecommendedClubs.map((clubName, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center p-2 border-b"
                  >
                    <span>{clubName}</span>
                    <button
                      onClick={() => handleRemoveNotRecommended(clubName)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </li>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No clubs are currently not recommended.
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


