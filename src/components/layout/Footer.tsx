
import React from "react";
import { Link } from "react-router-dom";
import { BadgeIndianRupee, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <BadgeIndianRupee size={24} className="text-primary" />
              <span className="font-heading text-xl font-bold">AudioPhile</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Premium audio experiences for music enthusiasts and professionals. Quality you can hear.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h5 className="font-heading font-medium mb-4">Shop</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/products/headphones" className="text-muted-foreground hover:text-primary text-sm">
                  Headphones
                </Link>
              </li>
              <li>
                <Link to="/products/earbuds" className="text-muted-foreground hover:text-primary text-sm">
                  Earbuds
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-muted-foreground hover:text-primary text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-muted-foreground hover:text-primary text-sm">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-medium mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-muted-foreground hover:text-primary text-sm">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-medium mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} AudioPhile. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="MasterCard" className="h-6 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="PayPal" className="h-6 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/128/6124/6124998.png" alt="UPI" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
