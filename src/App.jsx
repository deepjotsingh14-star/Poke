import React from "react";
import Card from "./Pages/CardData.jsx";
import { Routes, Route } from "react-router-dom";
import Nav from "./Pages/Na-v.jsx";
import Home from "./Pages/Home.jsx";
import  SearchCard from "./Pages/SearchCard.jsx";
const App = () => 
  {
  return (
    <div className=" w-full   flex flex-col bg-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />   
        <Route path="/search" element={<SearchCard />} />

      </Routes>
      {/* <Card /> */}
    </div>
  );
};

export default App;
