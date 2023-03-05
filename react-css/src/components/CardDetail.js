import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = ({ data }) => {
  const router = useParams();
  const id = router.id;

  const resultCard = data.find((x) => x.id == id);
  console.log(resultCard);
  return <>{resultCard && resultCard.title}</>;
};

export default CardDetail;
