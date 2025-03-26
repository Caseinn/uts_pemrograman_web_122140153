import React from 'react';
import PropTypes from 'prop-types';

function truncateChars(text = '', maxChars = 20) {
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + '…';
}

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm m-3 bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 cursor-pointer transform transition-all duration-200 hover:shadow-lg hover:scale-105">
      <img
        className="w-78 h-80 rounded-t-lg object-cover"
        src={recipe.image}
        alt={recipe.name}
      />
      <div className="p-5">
        <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {truncateChars(recipe.name, 20)}
        </h5>
        <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md mb-3">
          <span>
            <strong>Cuisine:</strong> {recipe.cuisine || 'N/A'}
          </span>
          <span>
            <strong>Difficulty:</strong> {recipe.difficulty || 'N/A'}
          </span>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
