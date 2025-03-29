import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import RecipeCardSkeleton from '../components/RecipeCardSkeleton';
import KitchenBg from '../assets/KitchenBg.avif';

const HeroPage = () => {
  const { data, isLoading, error } = useFetch('https://dummyjson.com/recipes?limit=50');
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    if (data && data.recipes) {
      const shuffled = [...data.recipes].sort(() => 0.5 - Math.random());
      setRandomRecipes(shuffled.slice(0, 3));
    }
  }, [data]);

  return (
    <div>
<section
  className="bg-cover bg-center bg-gray-800 dark:bg-gray-900 h-64 sm:h-80 md:h-96 flex items-center justify-center relative"
  style={{
    backgroundImage: `url(${KitchenBg})`,
    backgroundPosition: 'center 60%',
  }}
>
  <a
    href="https://unsplash.com/photos/a-professional-chef-preparing-meal-flambing-indoors-in-restaurant-kitchen-fNukO6dfWDM"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute bottom-4 right-4 text-sm text-gray-300 hover:text-white"
  >
    Photo by Getty Images on Unsplash+
  </a>

  <div className="text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow-md">Nel's Kitchen</h1>
    <p className="mt-4 text-lg md:text-2xl text-gray-200">
      Discover your new favorite recipes
    </p>
    <Link
      to="/recipes"
      className="mt-6 inline-block px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
    >
      Explore Recipes
    </Link>
  </div>
</section>


      <section className="mt-4 p-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Featured Recipes
        </h2>
        {error && <div className="text-center text-red-500">Error: {error}</div>}
        <ul className="flex flex-wrap gap-6 justify-center items-center">
          {(isLoading || randomRecipes.length === 0) ? (
            Array.from({ length: 3 }).map((_, index) => (
              <li key={index}>
                <RecipeCardSkeleton />
              </li>
            ))
          ) : (
            randomRecipes.map((recipe) => (
              <li key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`}>
                  <RecipeCard recipe={recipe} />
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default HeroPage;
