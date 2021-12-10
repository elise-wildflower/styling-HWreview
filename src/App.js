import React from "react";
import { Route, Routes } from 'react-router-dom';
import Styled from "./Styled";
import NavBar from "./NavBar";
import Semantic from "./Semantic";
import Css from "./Css";
import styled from 'styled-components'

const Pages = styled.div`
  background-color: black;
  min-height: 100vh;
`

function App() {
  return (
    <Pages>
      <NavBar />
        <Routes>
          <Route path="/" element={<Styled />} />
          <Route path="/semantic" element={<Semantic />} />
          <Route path="/css" element={<Css />} />
        </Routes>
    </Pages>
  );
}
export default App;