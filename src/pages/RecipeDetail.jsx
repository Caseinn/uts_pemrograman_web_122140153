// src/pages/RecipeDetail.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SkeletonRecipeDetail from "../components/SkeletonDetail";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset loading state on id change
    setIsLoading(true);
    const fetchRecipeDetail = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) throw new Error("Failed to fetch recipe details");
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeDetail();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) return <SkeletonRecipeDetail />;

  if (error)
    return <p className="text-center text-red-500 p-4">Error: {error}</p>;

  return (
    <div className="max-w-2xl mx-auto my-6 p-4 bg-white shadow-md rounded-lg dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        {recipe.name}
      </h2>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-72 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Cuisine:</strong> {recipe.cuisine}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Difficulty:</strong> {recipe.difficulty}
      </p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          Preparation &amp; Cooking
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Prep Time:</strong> {recipe.prepTimeMinutes} minutes
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Cook Time:</strong> {recipe.cookTimeMinutes} minutes
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Servings:</strong> {recipe.servings}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Calories:</strong> {recipe.caloriesPerServing} kcal/serving
        </p>
      </div>
      {recipe.ingredients && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Ingredients
          </h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {recipe.instructions && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            Instructions
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{recipe.instructions}</p>
        </div>
      )}
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Tags:</strong> {recipe.tags?.join(", ") || "None"}
        </p>
      </div>
    </div>
  );
};

export default RecipeDetail;
