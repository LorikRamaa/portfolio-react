import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Content from "./components/Content";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
