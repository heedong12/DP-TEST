import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header.js";
import Navbar from "./component/Navbar.js";
import Left from "./assets/left.png";
import Right from "./assets/right.png";

function App() {
  const data = ["바다", "가족", "여행", "과일", "강아지"];
  return (
    <div
      style={{
        width: "393px",
        height: "852px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header pageName="그림일기" />
      <div id="content">
        <div id="keyword">
          <img src={Left} height="30" />
          <p style={{ fontSize: "25px", flexGrow: "1", textAlign: "center" }}>
            {data[0]}
          </p>
          <img src={Right} height="30" />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
