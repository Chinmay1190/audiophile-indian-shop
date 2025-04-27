
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Premium over-ear and on-ear headphones",
    link: "/products/headphones"
  },
  {
    name: "Earbuds",
    image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5d871",
    description: "True wireless and neckband earbuds",
    link: "/products/earbuds"
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1612015670817-0127d21628d4",
    description: "Cases, stands, and audio enhancers",
    link: "/products/accessories"
  }
];

const CategorySection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden card-hover">
              <Link to={category.link}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading text-xl font-medium mb-2">{category.name}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full">Explore {category.name}</Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
