import React, { useState, useEffect } from "react";
import { read, utils } from "xlsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from './firebase';
import ClubBox from './ClubBox';

/*const Home = ({ userId }) => {
    // getAuth()
    // .getUserByEmail(email)
    // .then((userRecord) => {
    //     // See the UserRecord reference doc for the contents of userRecord.
    //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    // })
    // .catch((error) => {
    //     console.log('Error fetching user data:', error);
    // });
    const [clubs, setClubs] = useState([]);
    const [filteredClubs, setFilteredClubs] = useState([]);
    const [userPreferences, setUserPreferences] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchClubsFromExcel = async () => {
        try {
            const response = await fetch("/UF Clinder Data.xlsx");
            const arrayBuffer = await response.arrayBuffer();
            const workbook = read(arrayBuffer, { type: "array" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = utils.sheet_to_json(sheet).map((club) => ({
                ...club,
                categories: club.Categories
                ? club.Categories.split(",").map((category) => category.trim())
                : [],
            }));
            setClubs(data);
        } catch (error) {
            console.error("Error reading clubs from Excel: ", error);
        }
    };

    const fetchUserPreferences = async () => {
        try {
            if (!userId) {
                console.error("User ID is undefined.");
                setUserPreferences([]);
                return;
            }

            const userDocRef = doc(db, "users", userId);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                const userPrefs = Object.keys(userData.preferences).filter(
                    (key) => userData.preferences[key] === true
                );
                console.log("Fetched user preferences:", userPrefs);
                setUserPreferences(userPrefs);
            } else {
                console.error("User document not found.");
                setUserPreferences([]);
            }
        } catch (error) {
            console.error("Error fetching user preferences:", error);
            setUserPreferences([]);
        }
    };

    const filterClubs = () => {
        if (!Array.isArray(userPreferences)) {
          console.error("User preferences are not an array:", userPreferences);
          setFilteredClubs([]);
          return;
        }
      
        const filtered = clubs.filter((club) =>
          club.categories.some((category) => userPreferences.includes(category))
        );
        setFilteredClubs(filtered);
      };
      

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await fetchClubsFromExcel();
            await fetchUserPreferences();
            setLoading(false);
        };
        fetchData();
    }, [userId]);

    useEffect(() => {
        filterClubs();
    }, [clubs, userPreferences]);

    if (loading) {
        return <p>Loading clubs...</p>;
    }

    return (
        <div>
          <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">
            Welcome!
          </h1>
          <h2 className="text-2xl p-6 font-semibold text-slate-300 items-center flex justify-center">
            Clubs Matching Your Preferences:
          </h2>
    
          <div className="overflow-x-scroll whitespace-nowrap px-6">
            <div className="flex space-x-4">
              {filteredClubs.map((club, index) => (
                <ClubBox key={index} clubName={club.Organization} clubDesc={club.Description} />
              ))}
            </div>
          </div>
        </div>
      );
};

export default Home;*/ 


const Home = ({ userId }) => {
    const [clubs, setClubs] = useState([]);
    const [filteredClubs, setFilteredClubs] = useState([]);
    const [userPreferences, setUserPreferences] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchClubsFromExcel = async () => {
        try {
            const response = await fetch("/UF Clinder Data.xlsx");
            const arrayBuffer = await response.arrayBuffer();
            const workbook = read(arrayBuffer, { type: "array" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = utils.sheet_to_json(sheet).map((club) => ({
                ...club,
                categories: club.Categories
                ? club.Categories.split(",").map((category) => category.trim())
                : [],
            }));
            setClubs(data);
        } catch (error) {
            console.error("Error reading clubs from Excel: ", error);
        }
    };

    const fetchUserPreferences = async () => {
        try {
            if (!userId) {
                console.error("User ID is undefined.");
                setUserPreferences([]);
                return;
            }

            const userDocRef = doc(db, "users", userId);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
                const userData = userDoc.data();
                const userPrefs = Object.keys(userData.preferences).filter(
                    (key) => userData.preferences[key] === true
                );
                console.log("Fetched user preferences:", userPrefs);
                setUserPreferences(userPrefs);
            } else {
                console.error("User document not found.");
                setUserPreferences([]);
            }
        } catch (error) {
            console.error("Error fetching user preferences:", error);
            setUserPreferences([]);
        }
    };

    const filterClubs = () => {
        if (!Array.isArray(userPreferences)) {
          console.error("User preferences are not an array:", userPreferences);
          setFilteredClubs([]);
          return;
        }
      
        const filtered = clubs.filter((club) =>
          club.categories.some((category) => userPreferences.includes(category))
        );
        setFilteredClubs(filtered);
      };
      

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await fetchClubsFromExcel();
            await fetchUserPreferences();
            setLoading(false);
        };
        fetchData();
    }, [userId]);

    useEffect(() => {
        filterClubs();
    }, [clubs, userPreferences]);

    if (loading) {
        return <p>Loading clubs...</p>;
    }

    return (
        <div>
            <h1 className="text-5xl p-11 font-semibold text-slate-300 items-center flex justify-center">
                Welcome!
            </h1>
            <h2 className="text-2xl p-6 font-semibold text-slate-300 items-center flex justify-center">
                Clubs Matching Your Preferences:
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {filteredClubs.map((club, index) => (
                    <ClubBox key={index} clubName={club.Organization} clubDesc={club.Description} />
                ))}
            </div>
        </div>
    );
};

export default Home;





