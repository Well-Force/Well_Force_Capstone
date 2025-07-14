import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import LandingPage from "../pages/LandingPage/LandingPage";
import AICompanion from "../components/AICompanion/AICompanion";import GoalsPage from "../pages/GoalsPage/GoalsPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<AICompanion />} />
                    <Route path="/home" element={<GoalsPage/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
