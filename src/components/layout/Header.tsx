
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Sun, Moon, BadgeIndianRupee, Headphones, Menu, Search } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartCount } = useCart();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Headphones", path: "/products/headphones" },
    { name: "Earbuds", path: "/products/earbuds" },
    { name: "Accessories", path: "/products/accessories" },
    { name: "Sale", path: "/sale" }
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <BadgeIndianRupee size={24} className="text-primary" />
          <span className="font-heading text-xl font-bold">AudioPhile</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Search, Cart, Theme Toggle */}
        <div className="flex items-center space-x-3">
          {/* Search Button/Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Search size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-3">
              <Input placeholder="Search products..." />
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          {/* Cart Button */}
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link to="/cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 pt-10">
                  <Link to="/" className="flex items-center space-x-2">
                    <BadgeIndianRupee size={24} className="text-primary" />
                    <span className="font-heading text-xl font-bold">AudioPhile</span>
                  </Link>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link 
                        key={item.name}
                        to={item.path}
                        className="text-foreground/80 hover:text-primary transition-colors py-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
