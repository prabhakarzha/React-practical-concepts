import React, { useState } from "react";
import "./App.css";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];

function App() {
  // state to store the selected country
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    const selectedIndex = e.target.value;
    const country = countries[selectedIndex];
    setSelectedCountry(country);
    setSelectedCity(country.cities[0]); // set the first city by default
  };

  return (
    <div className="App">
      <h1>Dropdown Value</h1>
      <select
        value={countries.indexOf(selectedCountry)}
        onChange={handleCountryChange}
      >
        {countries.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {selectedCountry.cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
