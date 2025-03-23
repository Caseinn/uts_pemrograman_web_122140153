import React, { useState, useMemo, useEffect } from "react";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import Pagination from "../components/Pagination";
import useFetchRecipes from "../hooks/useFetchRecipes";

const RecipeList = ({ type }) => {
  const { data, isLoading, error } = useFetchRecipes("https://dummyjson.com/recipes?limit=50");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  const recipes = data && data.recipes ? data.recipes : [];

  const sortedRecipes = useMemo(
    () => (recipes ? [...recipes].sort((a, b) => a.name.localeCompare(b.name)) : []),
    [recipes]
  );

  const getRandomRecipes = (recipes, count) => {
    const shuffled = [...recipes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  const homeRecipes = useMemo(() => getRandomRecipes(sortedRecipes, 3), [sortedRecipes]);
  const totalPages = Math.ceil(sortedRecipes.length / recipesPerPage);

  const paginatedRecipes = useMemo(() => {
    const start = (currentPage - 1) * recipesPerPage;
    return sortedRecipes.slice(start, start + recipesPerPage);
  }, [currentPage, sortedRecipes]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (error) return <p className="text-center text-red-500 p-4">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
      {isLoading ? (
        <div className="gap-6 flex flex-wrap justify-center">
          {Array.from({ length: type === "home" ? 3 : 9 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="gap-6 flex flex-wrap justify-center">
          {(type === "home" ? homeRecipes : paginatedRecipes).map((recipe) => (
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.name}
              image={recipe.image}
              cuisine={recipe.cuisine}
              difficulty={recipe.difficulty}
            />
          ))}
        </div>
      )}
      {type === "recipes" && (
        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default RecipeList;
