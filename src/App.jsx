import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";

// Custom Home Page with Hero Section
const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 relative rounded-lg"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?cooking')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center px-4">
            Welcome to Nel's Kitchen
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 text-center px-4">
            Discover, cook, and enjoy our delicious recipes
          </p>
        </div>
      </section>

      {/* Recipe List Section for Home Page */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            Featured Recipes
          </h2>
          <RecipeList type="home" />
        </div>
      </section>
    </div>
  );
};

// Wrapper for RecipeDetail using useParams
const RecipeDetailWrapper = () => {
  const { id } = useParams();
  return <RecipeDetail recipeId={id} />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page with Hero Section */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        {/* All Recipes Page */}
        <Route
          path="/recipe"
          element={
            <Layout>
              <RecipeList type="recipes" />
            </Layout>
          }
        />

        {/* Recipe Detail Page */}
        <Route
          path="/recipes/:id"
          element={
            <Layout>
              <RecipeDetailWrapper />
            </Layout>
          }
        />

        {/* 404 Not Found Page */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
