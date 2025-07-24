import AICompanionModal from "../../components/AICompanion/AICompanion";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../App/App.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import "../HomePage/HomePage.css";
import Graph from "../../components/Graph/Graph";
import Carousel from "../../components/Carousel/Carousel";
import Info from "../../components/DisplayInfo/DisplayInfo";
import NavBar from "../../components/NavBar/NavBar";

import "../HomePage/HomePage.css";

const HomePage = ({ user, setUser }) => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  useEffect(() => {
    console.log("HomePage.jsx - Received user prop:", user);
  }, [user]);

  return (
    <div className="home-body">
      <h1 className="welcome-user">
        Welcome, {user ? user.name || "Friend" : "Guest"}!
      </h1>
      <div className="container-temp">
        <div className="separated-container">
          <Info user={user} />
          <Carousel />
        </div>
        <Graph />
      </div>
      <button
        type="button"
        className="ai-companion-button"
        onClick={() => setIsAIModalOpen(true)}
      >
        <img
          src="astro-profile-selected.png"
          alt="ai companion"
          width="60px"
          className="img-ai"
        ></img>
        <span className="ai-button-txt">Chat with me!</span>
      </button>
      {isAIModalOpen && (
        <AICompanionModal onClose={() => setIsAIModalOpen(false)} />
      )}
    </div>
    //   </header>
    // </div>
    // </div>
  );
};

export default HomePage;
