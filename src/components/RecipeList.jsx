import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeCard from './RecipeCard';
import RecipeCardSkeleton from './RecipeCardSkeleton';
import Pagination from './Pagination';

const RecipeList = () => {
  // Fetch recipes data from the API
  const { data, isLoading, error } = useFetch('https://dummyjson.com/recipes?limit=50');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  // State to track if images for the current page are loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

  if (error) return <div>Error: {error}</div>;

  // Get the recipes array from fetched data, or an empty array if not available
  const recipes = data?.recipes || [];
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  // Calculate the indexes for slicing the array based on current page
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

  // Preload images for the current page
  useEffect(() => {
    // Reset imagesLoaded flag whenever currentRecipes changes
    setImagesLoaded(false);
    if (currentRecipes.length === 0) return;

    let loadedCount = 0;
    currentRecipes.forEach((recipe) => {
      const img = new Image();
      img.src = recipe.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === currentRecipes.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Even if an image fails, count it as loaded
        loadedCount++;
        if (loadedCount === currentRecipes.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [currentRecipes]);

  // Handle pagination changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <div className="max-w-screen-lg mx-auto">
        {/* Render skeletons if the API is still loading or if the images for the current page aren't loaded yet */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center">
          {(isLoading || !imagesLoaded)
            ? Array.from({ length: itemsPerPage }).map((_, index) => (
                <li key={index}>
                  <RecipeCardSkeleton />
                </li>
              ))
            : currentRecipes.map((recipe) => (
                <li key={recipe.id}>
                  <Link to={`/recipes/${recipe.id}`}>
                    <RecipeCard recipe={recipe} />
                  </Link>
                </li>
              ))}
        </ul>
        {/* Render Pagination only when data and images are loaded */}
        {(!isLoading && imagesLoaded && recipes.length > 0) && (
          <div className="my-3 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
