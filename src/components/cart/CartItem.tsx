
import React from "react";
import { Trash, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/products";
import { CartItem as CartItemType } from "@/context/CartContext";
import { Link } from "react-router-dom";

interface CartItemProps {
  item: CartItemType;
  updateQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, updateQuantity, removeFromCart }) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
        <Link to={`/product/${item.id}`}>
          <img 
            src={item.images[0]} 
            alt={item.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      <div className="ml-4 flex-grow">
        <Link to={`/product/${item.id}`}>
          <h3 className="font-medium hover:text-primary">{item.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{item.brand}</p>
        <p className="text-sm text-muted-foreground">
          {item.isWireless ? "Wireless" : "Wired"}
        </p>
      </div>
      
      <div className="flex items-center mx-4 space-x-1">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => handleQuantityChange(-1)}
        >
          <Minus size={14} />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button 
          variant="outline" 
          size="icon" 
          className="h-8 w-8" 
          onClick={() => handleQuantityChange(1)}
        >
          <Plus size={14} />
        </Button>
      </div>
      
      <div className="text-right min-w-[80px]">
        <p className="font-medium">
          {formatPrice(item.salePrice || item.price)}
        </p>
        <p className="text-sm font-medium">
          {formatPrice((item.salePrice || item.price) * item.quantity)}
        </p>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-4" 
        onClick={() => removeFromCart(item.id)}
      >
        <Trash size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
