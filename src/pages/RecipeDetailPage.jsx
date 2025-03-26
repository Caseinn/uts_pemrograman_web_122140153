import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RecipeDetail from '../components/RecipeDetail';
import NotFound from '../pages/NotFoundPage';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);

  // Check if the recipeId is valid (between 1 and 50)
  if (isNaN(recipeId) || recipeId < 1 || recipeId > 50) {
    return <NotFound />;
  }

  const { data, isLoading, error } = useFetch(`https://dummyjson.com/recipes/${recipeId}`);

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <RecipeDetail recipe={data} />
    </div>
  );
};

export default RecipeDetailPage;
