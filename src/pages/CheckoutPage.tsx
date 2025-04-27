
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import { OrderDetails } from "@/types";

const CheckoutPage = () => {
  const { items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  // Calculate subtotal, shipping, and total
  const subtotal = cartTotal;
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 199) : 0;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;
  
  // Handle form submission
  const handleCheckout = (data: OrderDetails) => {
    // In a real application, this would send the order to a backend
    console.log("Order details:", data);
    console.log("Order items:", items);
    
    // Clear cart and redirect to success page
    clearCart();
    navigate("/success", { state: { orderId: Math.floor(Math.random() * 1000000) } });
  };
  
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/cart">
              <ArrowLeft size={16} className="mr-2" />
              Back to Cart
            </Link>
          </Button>
          <h1 className="text-3xl font-heading font-bold">Checkout</h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CheckoutForm onSubmit={handleCheckout} />
          </div>
          
          <div>
            <div className="bg-card rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-lg font-medium mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-muted rounded-md overflow-hidden flex-shrink-0 mr-2">
                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium truncate w-48">{item.name}</p>
                          <p className="text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">
                        {formatPrice((item.salePrice || item.price) * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>
                
                <Separator />
                
                {/* Price Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (GST 18%)</span>
                    <span>{formatPrice(tax)}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-card rounded-lg shadow-sm p-6">
              <h3 className="font-heading text-base font-medium mb-3">Payment Methods</h3>
              <div className="flex flex-wrap gap-2">
                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="MasterCard" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="PayPal" className="h-8" />
                <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="UPI" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
