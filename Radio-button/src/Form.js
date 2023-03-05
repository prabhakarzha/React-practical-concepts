import React, { useState } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    phone: "",
    city: "",
  });

  const [submitformData, setSubmitFormData] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    // console.log(name, value);
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...userDetails,
    };
    setSubmitFormData([...submitformData, newUser]);
    console.log(submitformData);
    setUserDetails({ name: "", address: "", phone: "", city: "" });
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={userDetails.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={userDetails.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={userDetails.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={userDetails.city}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registration</button>
      </form>
      <div>
        {submitformData.map((curElem) => {
          const { id, name, address, phone, city } = curElem;
          return (
            <div className="showDataStyle" key={id}>
              <table>
                <tr>
                  <th>{name}</th>
                  <th>{address}</th>
                  <th>{phone}</th>
                  <th>{city}</th>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
