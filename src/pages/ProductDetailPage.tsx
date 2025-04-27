
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Check,
  ArrowLeft 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Get product by ID
  const product = id ? getProductById(parseInt(id)) : null;
  
  // Get similar products (same category)
  const similarProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4) 
    : [];
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-heading mb-4">Product Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The product you are looking for does not exist.
          </p>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to Cart",
      description: `${product.name} (${quantity}) has been added to your cart.`,
    });
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`w-20 h-20 bg-muted rounded border-2 overflow-hidden flex-shrink-0 ${
                    activeImage === index ? "border-primary" : "border-transparent"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.brand}</p>
            </div>
            
            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                  } ${i === Math.floor(product.rating) && product.rating % 1 > 0 ? "fill-primary text-primary opacity-60" : ""}`}
                />
              ))}
              <span className="ml-2 text-sm">{product.rating} rating</span>
            </div>
            
            {/* Price */}
            <div>
              {product.salePrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">{formatPrice(product.salePrice)}</span>
                  <span className="text-lg line-through text-muted-foreground">
                    {formatPrice(product.price)}
                  </span>
                  <span className="ml-2 text-sm bg-destructive/10 text-destructive px-2 py-0.5 rounded">
                    {Math.round(((product.price - product.salePrice) / product.price) * 100)}% Off
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold">{formatPrice(product.price)}</span>
              )}
              <p className="text-sm text-muted-foreground mt-1">
                Inclusive of all taxes
              </p>
            </div>
            
            {/* Description */}
            <p className="text-foreground/90">{product.description}</p>
            
            {/* Key Features */}
            <div>
              <h3 className="font-medium mb-2">Key Features:</h3>
              <ul className="space-y-1">
                {product.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check size={16} className="text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Color Options */}
            <div>
              <h3 className="font-medium mb-2">Color:</h3>
              <div className="flex gap-2">
                {product.colors.map((color, index) => (
                  <div key={index} className="relative">
                    <button
                      className={`w-8 h-8 rounded-full border-2 ${index === 0 ? "border-primary" : "border-transparent"}`}
                      style={{ backgroundColor: getColorValue(color) }}
                      title={color}
                    />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs whitespace-nowrap">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stock Information */}
            <div className="flex items-center">
              {product.stockCount > 0 ? (
                <span className="text-sm text-green-600 dark:text-green-500 flex items-center">
                  <Check size={16} className="mr-1" />
                  In Stock ({product.stockCount} available)
                </span>
              ) : (
                <span className="text-sm text-red-600">Out of Stock</span>
              )}
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus size={16} />
                </Button>
              </div>
              
              <Button 
                className="flex-1" 
                onClick={handleAddToCart}
                disabled={product.stockCount === 0}
              >
                <ShoppingCart size={16} className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="mb-6">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <h3 className="font-heading text-xl font-medium">Product Details</h3>
              <p>{product.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="font-medium mb-3">Specifications</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Brand</span>
                      <span>{product.brand}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <span>{product.category === "headphones" ? "Headphones" : product.category === "earbuds" ? "Earbuds" : "Accessory"}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Connection</span>
                      <span>{product.isWireless ? "Wireless" : "Wired"}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Available Colors</span>
                      <span>{product.colors.join(", ")}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-3">What's in the box</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>1x {product.name}</li>
                    {product.isWireless && <li>1x Charging Cable</li>}
                    {product.category === "headphones" && <li>1x Carrying Case</li>}
                    {product.category === "earbuds" && <li>3x Ear Tips (S, M, L)</li>}
                    <li>1x User Manual</li>
                    <li>1x Warranty Card</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="space-y-4">
              <h3 className="font-heading text-xl font-medium">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            
            <TabsContent value="reviews" className="space-y-4">
              <h3 className="font-heading text-xl font-medium">Customer Reviews</h3>
              <div className="flex items-center mb-4">
                <div className="flex mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{product.rating} out of 5</span>
              </div>
              <div className="space-y-4">
                {/* Mock reviews */}
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b pb-4">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">User{i+1}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className={j < Math.floor(4 + Math.random()) ? "fill-primary text-primary" : "text-muted"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">{getRandomReview(product.category)}</p>
                  </div>
                ))}
                <Button variant="outline" className="mt-4">Show More Reviews</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-heading font-medium mb-8">You May Also Like</h2>
            <ProductGrid products={similarProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

// Helper function to map color names to values
function getColorValue(colorName: string): string {
  const colorMap: Record<string, string> = {
    "Black": "#000000",
    "White": "#FFFFFF",
    "Silver": "#C0C0C0",
    "Gold": "#FFD700",
    "Red": "#FF0000",
    "Blue": "#0000FF",
    "Green": "#008000",
    "Purple": "#800080",
    "Orange": "#FFA500",
    "Pink": "#FFC0CB",
    "Brown": "#A52A2A",
    "Gray": "#808080",
    "Space Gray": "#888888",
    "Deep Red": "#8B0000",
    "Matte Black": "#28282B",
    "Navy Blue": "#000080",
    "Midnight Blue": "#191970",
    "Tan": "#D2B48C",
    "Cream": "#FFFDD0",
    "Mint Green": "#98FB98",
    "Rose Gold": "#B76E79",
    "Ivory": "#FFFFF0",
    "Deep Blue": "#00008B",
    "Black/Red": "#300000",
    "Black/Blue": "#000030",
    "Green/Black": "#004000",
    "Blue/Black": "#000050"
  };
  
  return colorMap[colorName] || "#CCCCCC";
}

// Helper function for mock reviews
function getRandomReview(category: string): string {
  const reviews = [
    `These ${category} are amazing! The sound quality is exceptional and they're very comfortable.`,
    `I've been using these for about a month now and they're holding up great. Battery life is impressive.`,
    `The build quality is excellent. Worth every rupee.`,
    `Good product for the price. Sound quality could be better but overall I'm satisfied.`,
    `Love the design and the sound is crystal clear. The noise cancellation works really well.`,
    `Comfortable to wear for long periods. No ear fatigue even after hours of use.`,
    `The bass response is excellent. Perfect for my music preferences.`,
    `Fast delivery and the product is just as described. Very happy with my purchase.`,
    `Not as good as I expected for the price, but they're decent.`,
    `Amazing quality! I'm really impressed with the clarity of sound.`
  ];
  
  return reviews[Math.floor(Math.random() * reviews.length)];
}

export default ProductDetailPage;
