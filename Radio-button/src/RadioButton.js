import React, { useState } from "react";

function RadioButton() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const selectedOption = event.target.value;
    let newSelectedOptions = [...selectedOption];
    console.log(newSelectedOptions);
    if (newSelectedOptions.includes(selectedOption)) {
      newSelectedOptions = newSelectedOptions.filter(
        (option) => option !== selectedOption
      );
    } else {
      newSelectedOptions.push(selectedOption);
      console.log(newSelectedOptions);
    }
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="sonu"
          checked={selectedOptions.includes("sonu")}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="vikash"
          checked={selectedOptions.includes("vikash")}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <label>
        <input
          type="radio"
          value="kohli"
          checked={selectedOptions.includes("kohli")}
          onChange={handleOptionChange}
        />
        Option 3
      </label>

      <p>Selected Options: {selectedOptions.join(", ")}</p>
    </div>
  );
}

export default RadioButton;
