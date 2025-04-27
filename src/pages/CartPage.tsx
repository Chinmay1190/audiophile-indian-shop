
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { formatPrice } from "@/data/products";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-heading font-bold mb-8">Shopping Cart</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">
                    {items.length} {items.length === 1 ? "Item" : "Items"}
                  </span>
                  <Button variant="ghost" size="sm" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
                <Separator className="mb-4" />
                
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" asChild className="flex items-center">
                  <Link to="/products">
                    <ArrowLeft size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <CartSummary />
              
              <div className="mt-6 bg-card rounded-lg shadow-sm p-6">
                <h3 className="font-heading text-lg font-medium mb-4">Payment Methods</h3>
                <div className="flex flex-wrap gap-2">
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="MasterCard" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="PayPal" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="UPI" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <ShoppingCart size={64} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-heading font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild size="lg">
              <Link to="/products">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
