
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Raj Sharma",
    title: "Music Producer",
    content: "The sound quality is absolutely phenomenal. I use these for my studio work and they've become an essential part of my setup.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    title: "Tech Enthusiast",
    content: "I've tried many premium brands, but these headphones offer the best value for money. The noise cancellation is exceptional!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    title: "Frequent Traveler",
    content: "Perfect for long flights. Comfortable even after hours of use, and the battery life is impressive.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  }
];

const TestimonialSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-8 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <Card key={item.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < item.rating ? "fill-primary text-primary" : "text-muted"}
                    />
                  ))}
                </div>
                <p className="text-foreground/90 italic mb-4">"{item.content}"</p>
                <div className="flex items-center mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
