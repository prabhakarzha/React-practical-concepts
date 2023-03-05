import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const handleCardDetails = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div>
      {data &&
        data.map((card) => (
          <div
            style={{
              width: 300,
              height: 200,
              margin: 20,
              border: "1px solid red",
            }}
          >
            {card.title}
            {card.content}
            <button onClick={() => handleCardDetails(card.id)}>Details</button>
          </div>
        ))}
    </div>
  );
};
export default Cards;
