
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
              Premium Audio <br />
              <span className="text-primary">Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Discover the perfect sound with our collection of high-quality headphones and earbuds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/products/headphones">Explore Headphones</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center">
                <Headphones className="text-primary mr-2" size={20} />
                <span className="text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mr-2"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-sm">1 Year Warranty</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              alt="Premium Headphones"
              className="rounded-lg shadow-xl max-h-[500px] w-full object-cover object-center animate-slide-up"
            />
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <p className="font-medium">SonicPulse Pro</p>
              <p className="text-primary">₹19,999</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="hidden md:block absolute -right-20 -top-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="hidden md:block absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
