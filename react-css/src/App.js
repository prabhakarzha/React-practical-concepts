import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import PopUp from "./components/PopUp";

const App = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isFolderClicked, setIsFolderClicked] = useState(false);

  const handleClick = () => {
    setShowButtons(true);
  };

  const handleButtonClick = (buttonType) => {
    if (buttonType === "Folder") {
      setShowPopup(true);
      setIsFolderClicked(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setIsFolderClicked(false);
  };

  return (
    <div>
      <h1>Testing Button </h1>
      <Button onClick={handleClick}>Link</Button>
      <br />
      {showButtons && (
        <div>
          <Button onClick={() => handleButtonClick("Content")}>Content</Button>
          <br />
          <Button onClick={() => handleButtonClick("Folder")}>Folder</Button>
        </div>
      )}

      <PopUp showPopup={showPopup} closePopup={closePopup} />
    </div>
  );
};

export default App;
