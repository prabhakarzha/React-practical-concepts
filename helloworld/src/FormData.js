import React, { useState } from "react";

const FormData = (props) => {
  const [tableData, settableData] = useState(props.tableData);
  console.log(tableData);
  return (
    <div>
      <h1>Table Data</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        {tableData.map((post) => (
          <tr>
            <td>{post.name}</td>
            <td>{post.contact}</td>
            <td>{post.country}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FormData;
