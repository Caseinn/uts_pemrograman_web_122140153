import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <div>No recipe data found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800 p-6">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
        {recipe.name}
      </h1>
      <div className="mt-4 space-y-1">
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Cuisine:</strong> {recipe.cuisine || 'N/A'}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Difficulty:</strong> {recipe.difficulty || 'N/A'}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes || 0} min
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes || 0} min
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Servings:</strong> {recipe.servings || 'N/A'}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Calories Per Serving:</strong> {recipe.caloriesPerServing || 'N/A'}
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Ingredients
        </h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Instructions
        </h2>
        <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mt-2">
          {recipe.instructions && recipe.instructions.map((instruction, index) => (
            <li key={index} className="mb-2">{instruction}</li>
          ))}
        </ol>
      </div>
      {recipe.tags && recipe.tags.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {recipe.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      {recipe.mealType && recipe.mealType.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Meal Types</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {recipe.mealType.map((meal, index) => (
              <span key={index} className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">
                {meal}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.arrayOf(PropTypes.string),
    prepTimeMinutes: PropTypes.number,
    cookTimeMinutes: PropTypes.number,
    servings: PropTypes.number,
    difficulty: PropTypes.string,
    cuisine: PropTypes.string,
    caloriesPerServing: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.string),
    mealType: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default RecipeDetail;
