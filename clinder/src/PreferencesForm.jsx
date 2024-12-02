import React, { useState, useEffect } from 'react';
import db from './firebase'; // Adjust path to your firebase config
import { doc, getDoc, setDoc } from 'firebase/firestore';
import categoriesData from './categories.json'; // Import the JSON file

const PreferencesForm = ({ userId }) => {
  const [preferences, setPreferences] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initialPreferences = categoriesData.categories.reduce((acc, category) => {
      acc[category] = false;
      return acc;
    }, {});
    
    const fetchPreferences = async () => {
      try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          setPreferences({ ...initialPreferences, ...userDoc.data().preferences });
        } else {
          setPreferences(initialPreferences);
        }
      } catch (error) {
        console.error("Error fetching preferences:", error);
        setPreferences(initialPreferences);
      } finally {
        setLoading(false);
      }
    };

    fetchPreferences();
  }, [userId]);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setPreferences((prevPrefs) => ({
      ...prevPrefs,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, 'users', userId), { preferences });
      alert('Preferences updated successfully!');
    } catch (error) {
      console.error("Error updating preferences:", error);
      alert('Failed to update preferences.');
    }
  };

  if (loading) {
    return <p>Loading preferences...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md bg-slate-100 p-6 rounded-md">
      {categoriesData.categories.map((category) => (
        <div key={category} className="mb-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name={category}
              checked={preferences[category] || false}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span>{category}</span>
          </label>
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Update
      </button>
    </form>
  );
};

export default PreferencesForm;
