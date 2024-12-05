import { useEffect, useState } from 'react';
import { db } from './firebase'; // Adjust this import according to your firebase config
import { doc, getDoc } from 'firebase/firestore';

const GetClubs = ({ userId }) => {
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

  if (loading) {
    return <p>Loading clubs...</p>;
  }

  return (
    <div>
      {clubs.length > 0 ? (
        <ul>
          {clubs.map((club, index) => (
            <li key={index}>{club}</li>
          ))}
        </ul>
      ) : (
        <p>No clubs found for this user.</p>
      )}
    </div>
  );
};

export default GetClubs;
