// src/components/Card.js
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  cardContainer,
  cardImage,
  cardContent,
  cardTitle,
  cardInfo
} from "../styles/tailwindClasses";

const Card = ({ id, title, image, cuisine, difficulty }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/recipes/${id}`);

  return (
    <div className={`${cardContainer} cursor-pointer`} onClick={handleClick}>
      <img className={cardImage} src={image} alt={title} />
      <div className={cardContent}>
        <h5 className={cardTitle}>{title}</h5>
        <div className={cardInfo}>
          <span>
            <strong>Cuisine:</strong> {cuisine}
          </span>
          <span>
            <strong>Difficulty:</strong> {difficulty}
          </span>
        </div>
        <div className="flex-grow" />
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired
};

export default Card;
