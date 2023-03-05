import "./App.css";
import Cards from "./components/Cards";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CardDetail from "./components/CardDetail";
import { useState } from "react";
import data from "./value.json";
console.log(data);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Cards data={data} />} />

        <Route path="/:id" element={<CardDetail data={data} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
