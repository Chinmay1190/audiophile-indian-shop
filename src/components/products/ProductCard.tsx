
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <Card className="overflow-hidden h-full card-hover">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {product.isNew && (
            <Badge className="absolute top-2 right-2 bg-primary">New</Badge>
          )}
          {product.salePrice && (
            <Badge className="absolute top-2 left-2 bg-destructive">Sale</Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4 space-y-3">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-heading font-medium hover:text-primary truncate">{product.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground">{product.brand}</p>
        </div>
        
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <Star size={14} className="fill-primary text-primary" />
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {product.isWireless ? "Wireless" : "Wired"}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            {product.salePrice ? (
              <>
                <span className="font-medium">{formatPrice(product.salePrice)}</span>
                <span className="text-xs line-through text-muted-foreground">
                  {formatPrice(product.price)}
                </span>
              </>
            ) : (
              <span className="font-medium">{formatPrice(product.price)}</span>
            )}
          </div>
          
          <Button 
            variant="outline" 
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              addToCart(product);
            }}
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
