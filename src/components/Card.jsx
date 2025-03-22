import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, image, shortDescription, cuisine, difficulty }) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full sm:w-96 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 flex flex-col overflow-hidden transition-transform duration-200 hover:scale-105"
    >
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      
      <div className="p-5 flex flex-col flex-grow">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h5>

        {/* Cuisine & Difficulty Section */}
        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md mb-3">
          <span>
            <strong>Cuisine:</strong> {cuisine}
          </span>
          <span>
            <strong>Difficulty:</strong> {difficulty}
          </span>
        </div>

        {/* Short Description */}
        {shortDescription && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {shortDescription}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Button */}
        <button
          onClick={() => navigate(`/recipes/${id}`)}
          className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-end transition-colors duration-200"
        >
          Recipe →
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

export default Card;
