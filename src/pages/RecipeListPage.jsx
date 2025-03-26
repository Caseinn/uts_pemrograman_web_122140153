import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeCard from '../components/RecipeCard';
import RecipeCardSkeleton from '../components/RecipeCardSkeleton';
import Pagination from '../components/Pagination';

const RecipeListPage = () => {
  const { data, isLoading, error } = useFetch('https://dummyjson.com/recipes?limit=50');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [imagesLoaded, setImagesLoaded] = useState(false);

  if (error) return <div>Error: {error}</div>;

  const recipes = data?.recipes || [];
  const totalPages = Math.ceil(recipes.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentRecipes = recipes.slice(indexOfFirst, indexOfLast);

  useEffect(() => {
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
        loadedCount++;
        if (loadedCount === currentRecipes.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, [currentRecipes]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <div className="max-w-screen-lg mx-auto">
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

export default RecipeListPage;
