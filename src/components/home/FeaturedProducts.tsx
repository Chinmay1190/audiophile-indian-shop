
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { featuredProducts } from "@/data/products";
import ProductGrid from "../products/ProductGrid";

const FeaturedProducts = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold">Featured Products</h2>
          <Button variant="link" asChild>
            <Link to="/products" className="flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
