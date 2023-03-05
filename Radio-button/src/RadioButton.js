import React, { useState } from "react";

const RadioButton = () => {
  const [checked, setChecked] = useState();

  return (
    <div>
      <h1>radioButton</h1>

      <input
        name="checked"
        type="radio"
        value="yes"
        onChange={(e) => setChecked(e.target.value)}
      />
      <input
        type="radio"
        name="checked"
        value="no"
        onChange={(e) => setChecked(e.target.value)}
      />
    </div>
  );
};

export default RadioButton;
