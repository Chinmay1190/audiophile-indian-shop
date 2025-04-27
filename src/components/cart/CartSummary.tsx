
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { Link } from "react-router-dom";

const CartSummary = () => {
  const { items, cartTotal } = useCart();
  
  // Calculate subtotal, shipping, and total
  const subtotal = cartTotal;
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 199) : 0;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-heading text-lg font-medium mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax (GST)</span>
            <span>{formatPrice(tax)}</span>
          </div>
          
          <Separator className="my-3" />
          
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          
          {subtotal > 5000 && (
            <div className="text-xs text-primary font-medium">
              You qualified for free shipping!
            </div>
          )}
        </div>
        
        <Button className="w-full mt-6" asChild disabled={items.length === 0}>
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CartSummary;
