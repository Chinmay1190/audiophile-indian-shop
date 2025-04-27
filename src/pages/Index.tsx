
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import NewArrivals from "@/components/home/NewArrivals";
import PromoBanner from "@/components/home/PromoBanner";
import TestimonialSection from "@/components/home/TestimonialSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PromoBanner />
      <NewArrivals />
      <TestimonialSection />
    </Layout>
  );
};

export default Index;
