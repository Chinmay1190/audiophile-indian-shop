
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PromoBanner = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative overflow-hidden rounded-lg bg-primary/10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-primary font-medium mb-2">Limited Time Offer</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                  Up to 30% Off on Premium Headphones
                </h2>
              </div>
              <p className="text-muted-foreground">
                Elevate your audio experience with our premium collection. 
                Sale ends soon. Don't miss out!
              </p>
              <Button size="lg" asChild>
                <Link to="/sale">Shop the Sale</Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                *Terms and conditions apply
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1585298723682-7115561c51b7"
                alt="Premium Headphones on Sale"
                className="max-h-[300px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
