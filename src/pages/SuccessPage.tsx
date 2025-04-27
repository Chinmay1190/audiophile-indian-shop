
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ShoppingBag, Home } from "lucide-react";

const SuccessPage = () => {
  const location = useLocation();
  const orderId = location.state?.orderId || Math.floor(Math.random() * 1000000);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-center max-w-xl">
        <div className="bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 animate-fade-in">
          <Check size={48} className="text-primary" />
        </div>
        
        <h1 className="text-3xl font-heading font-bold mb-4">Order Confirmed!</h1>
        
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. We have received your order and are 
          processing it. You will receive an email confirmation shortly.
        </p>
        
        <div className="bg-card rounded-lg shadow-sm p-6 mb-8">
          <h3 className="font-medium mb-4">Order Details</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Order Number:</span>
              <span className="font-medium">#{orderId}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Order Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Estimated Delivery:</span>
              <span>{getEstimatedDeliveryDate()}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Payment Method:</span>
              <span>Credit/Debit Card</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/">
              <Home size={16} className="mr-2" />
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/products">
              <ShoppingBag size={16} className="mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

// Helper function to get estimated delivery date (3-5 days from now)
function getEstimatedDeliveryDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + Math.floor(Math.random() * 3) + 3); // 3-5 days
  return date.toLocaleDateString('en-IN', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export default SuccessPage;
