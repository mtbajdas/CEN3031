import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

// List of all categories for sorting
const VALID_TAGS = [
  'Academic/Research-Agricultural and Life Sciences',
  'Academic/Research-Arts',
  'Academic/Research-Business',
  'Academic/Research-Dentistry',
  'Academic/Research-Design',
  'Academic/Research-Education',
  'Academic/Research-Engineering',
  'Academic/Research-Health and Human Performance',
  'Academic/Research-Journalism and Communications',
  'Academic/Research-Law',
  'Academic/Research-Liberal Arts and Sciences',
  'Academic/Research-Medicine',
  'Academic/Research-Nursing',
  'Academic/Research-Pharmacy',
  'Academic/Research-Public Health and Health Professions',
  'Academic/Research-Veterinary Medicine',
  'Ambassador',
  'Community/Volunteer Service',
  'Cultural',
  'Graduate',
  'Interfraternity Council',
  'Panhellenic Council',
  'Sports',
];

const Sorting = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [data, setData] = useState([]);

  // Load the Excel file and process it
  useEffect(() => {
    const fetchClubs = async () => {
      const response = await fetch('/UF Clinder Data.xlsx'); 
      const data = await response.arrayBuffer();
      const workbook = XLSX.read(data, { type: 'array' });

      
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

      
      setData(sheetData);
    };

    fetchClubs();
  }, []);

  // Filter the data based on selected categories
  const handleSort = () => {
    const filteredData = data.filter((row) =>
      selectedCategories.some((category) => row.Categories?.includes(category))
    );
    setRecommendations(filteredData);
  };

  // Handle category selection
  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;

    // Check if the selected category is correct
    if (VALID_TAGS.includes(value)) {
      setSelectedCategories((prevCategories) =>
        checked ? [...prevCategories, value] : prevCategories.filter((cat) => cat !== value)
      );
    } else {
      console.warn(`Invalid category selected: ${value}`);
    }
  };

  return (
    <div>
      {/* Category Checkboxes */}
      <div>
        <h3>Select Categories:</h3>
        {VALID_TAGS.map((tag, index) => (
          <label key={index} style={{ display: 'block' }}>
            <input type="checkbox" value={tag} onChange={handleCategoryChange} /> {tag}
          </label>
        ))}
      </div>

      {/* Sort Button */}
      <button onClick={handleSort}>Sort Clubs</button>

      {/* Display Recommendations */}
      <div style={{ marginTop: '20px' }}>
        <h3>Recommended Clubs:</h3>
        {recommendations.length > 0 ? (
          recommendations.map((club, index) => (
            <div key={index} style={{ marginBottom: '10px', border: '1px solid black', padding: '10px' }}>
              <h4>{club.Organization}</h4>
              <p>{club.Description}</p>
              <p>
                <strong>Categories:</strong> {club.Categories}
              </p>
            </div>
          ))
        ) : (
          <p>No recommendations available. Please select categories and click sort.</p>
        )}
      </div>
    </div>
  );
};

export default Sorting; 

//This is for using the Sorting component in App.js.

/*import Sorting from './components/Sorting';

function App() {
  return (
    <div>
      <h1>UF Clinder Club Recommendations</h1>
      <Sorting />
    </div>
  );
}

export default App; */