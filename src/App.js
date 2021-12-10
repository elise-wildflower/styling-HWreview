import React from "react";
import { Route, Routes } from 'react-router-dom';
import Styled from "./Styled";
import NavBar from "./NavBar";
import Semantic from "./Semantic";
import Css from "./Css";

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Styled />} />
          <Route path="/semantic" element={<Semantic />} />
          <Route path="/css" element={<Css />} />
        </Routes>
    </div>
  );
}
export default App;