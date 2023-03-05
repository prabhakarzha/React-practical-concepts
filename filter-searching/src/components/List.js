import React, { useState } from "react";

const List = ({ data }) => {
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = () => {
    setFilteredData(data.filter((item) => item.includes(filterValue)));
  };

  return (
    <>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
      <table>
        <thead>
          <tr>
            <th>select </th>
            <th>consignment number</th>
            <th>Requistion id</th>
            <th>Tracking number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
