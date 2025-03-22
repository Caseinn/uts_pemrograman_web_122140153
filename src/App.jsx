// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetail";
import NotFound from "./pages/NotFound";
import Hero from "./pages/Hero"; // Refactored HomePage/Hero component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
            </Layout>
          }
        />
        <Route
          path="/recipe"
          element={
            <Layout>
              <RecipeList type="recipes" />
            </Layout>
          }
        />
        <Route
          path="/recipes/:id"
          element={
            <Layout>
              <RecipeDetail />
            </Layout>
          }
        />
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
