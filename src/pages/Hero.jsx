import React from "react";
import RecipeList from "../pages/RecipeList";
import {
  heroSection,
  heroOverlay,
  heroTitle,
  heroSubtitle,
  featuredSection,
  featuredTitle,
} from "../styles/tailwindClasses";

const Hero = () => {
  return (
    <div>
      <section
        className={`${heroSection} rounded-lg`}
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?cooking')" }}
      >
        <div className={heroOverlay}>
          <h1 className={heroTitle}>Welcome to Nel’s Kitchen</h1>
          <p className={heroSubtitle}>Discover, cook, and enjoy our delicious recipes</p>
        </div>
      </section>
      <section className={featuredSection}>
        <div className="mx-auto">
          <h2 className={featuredTitle}>Featured Recipes</h2>
          <RecipeList type="home" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
