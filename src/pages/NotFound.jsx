// src/components/NotFound.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { notFoundContainer, notFoundTitle, notFoundText, notFoundButton } from "../styles/tailwindClasses";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={notFoundContainer}>
      <h1 className={notFoundTitle}>404</h1>
      <p className={notFoundText}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <button onClick={() => navigate("/")} className={notFoundButton}>
        Go Home →
      </button>
    </div>
  );
};

export default NotFound;
