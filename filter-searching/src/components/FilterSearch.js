import React, { useState } from "react";

const FilterSearch = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredDatas, setFilteredDatas] = useState(data);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    setFilteredDatas(
      data.filter((row) => {
        return row.age.toString().includes(searchTerm);
      })
    );
  };

  filteredDatas.filter((row) => {
    return row.age.toString().includes(searchTerm);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredDatas.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterSearch;
