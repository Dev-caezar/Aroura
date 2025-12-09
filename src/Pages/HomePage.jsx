import React from "react";
import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import CountdownBanner from "../components/CountdownBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryGrid from "../components/CategoryGrid";
import Testimonials from "../components/Testimonials";
import NewsletterSignup from "../components/NewsletterSignup";
import HeroCard from "../components/HeroCard";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ValueProps />
      <CountdownBanner />
      <FeaturedProducts />
      {/* <CategoryGrid /> */}
      {/* <Product /> */}
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;
