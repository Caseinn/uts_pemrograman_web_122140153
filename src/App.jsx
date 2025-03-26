import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import RecipeList from './components/RecipeList';
import RecipeDetailPage from './pages/RecipeDetailPage';
import { ThemeProvider } from './context/ThemeContext';
import NotFoundPage from './pages/NotFoundPage';
import HeroPage from './pages/HeroPage';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
