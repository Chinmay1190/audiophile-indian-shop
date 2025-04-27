import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Product, SortOption, FilterOptions } from "@/types";
import { products, getAllBrands, formatPrice } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Headphones, Ear, Package } from "lucide-react";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

const ProductsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: [],
    priceRange: [0, 50000],
    brand: [],
    wireless: null,
  });

  const brands = getAllBrands();

  // Get min and max product prices
  const minPrice = 0;
  const maxPrice = 50000;

  // Set title based on category
  let pageTitle = "All Products";
  let pageIcon = null;

  if (category) {
    switch (category) {
      case "headphones":
        pageTitle = "Headphones";
        pageIcon = <Headphones className="mr-2" size={24} />;
        break;
      case "earbuds":
        pageTitle = "Earbuds";
        pageIcon = <Ear className="mr-2" size={24} />;
        break;
      case "accessories":
        pageTitle = "Accessories";
        pageIcon = <Package className="mr-2" size={24} />;
        break;
      default:
        break;
    }
  }

  // Update filtered products when filters change
  useEffect(() => {
    let result = [...products];

    // Filter by category from URL param first
    if (category) {
      result = result.filter((product) => product.category === category);
    } else if (filterOptions.category.length > 0) {
      // Then filter by category from filter panel
      result = result.filter((product) => filterOptions.category.includes(product.category));
    }

    // Filter by price range
    result = result.filter(
      (product) => {
        const price = product.salePrice || product.price;
        return price >= filterOptions.priceRange[0] && price <= filterOptions.priceRange[1];
      }
    );

    // Filter by brand
    if (filterOptions.brand.length > 0) {
      result = result.filter((product) => filterOptions.brand.includes(product.brand));
    }

    // Filter by wireless/wired
    if (filterOptions.wireless !== null) {
      result = result.filter((product) => product.isWireless === filterOptions.wireless);
    }

    // Sort products
    result = sortProducts(result, sortOption);

    setFilteredProducts(result);
  }, [category, filterOptions, sortOption, products]);

  // Sort products function
  const sortProducts = (products: Product[], option: SortOption) => {
    const sortedProducts = [...products];

    switch (option) {
      case "price-low":
        return sortedProducts.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
      case "price-high":
        return sortedProducts.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
      case "rating":
        return sortedProducts.sort((a, b) => b.rating - a.rating);
      case "name-asc":
        return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      case "featured":
      default:
        return sortedProducts.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
  };

  // Handle filter changes
  const handleCategoryChange = (cat: string) => {
    setFilterOptions((prev) => {
      const categories = prev.category.includes(cat)
        ? prev.category.filter((c) => c !== cat)
        : [...prev.category, cat];
      return { ...prev, category: categories };
    });
  };

  const handleBrandChange = (brand: string) => {
    setFilterOptions((prev) => {
      const brands = prev.brand.includes(brand)
        ? prev.brand.filter((b) => b !== brand)
        : [...prev.brand, brand];
      return { ...prev, brand: brands };
    });
  };

  const handleWirelessChange = (isWireless: boolean | null) => {
    setFilterOptions((prev) => ({
      ...prev,
      wireless: prev.wireless === isWireless ? null : isWireless,
    }));
  };

  const handlePriceChange = (values: number[]) => {
    setFilterOptions((prev) => ({
      ...prev,
      priceRange: values as [number, number],
    }));
  };

  const resetFilters = () => {
    setFilterOptions({
      category: [],
      priceRange: [minPrice, maxPrice],
      brand: [],
      wireless: null,
    });
    setSortOption("featured");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          {pageIcon}
          <h1 className="text-3xl font-heading font-bold">{pageTitle}</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-medium">Filters</h2>
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset
              </Button>
            </div>

            <Separator />

            {/* Category filter */}
            <div>
              <h3 className="font-medium mb-3">Category</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="headphones"
                    checked={filterOptions.category.includes("headphones")}
                    onCheckedChange={() => handleCategoryChange("headphones")}
                  />
                  <label htmlFor="headphones" className="text-sm cursor-pointer">
                    Headphones
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="earbuds"
                    checked={filterOptions.category.includes("earbuds")}
                    onCheckedChange={() => handleCategoryChange("earbuds")}
                  />
                  <label htmlFor="earbuds" className="text-sm cursor-pointer">
                    Earbuds
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="accessories"
                    checked={filterOptions.category.includes("accessories")}
                    onCheckedChange={() => handleCategoryChange("accessories")}
                  />
                  <label htmlFor="accessories" className="text-sm cursor-pointer">
                    Accessories
                  </label>
                </div>
              </div>
            </div>

            <Separator />

            {/* Price range filter */}
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={[minPrice, maxPrice]}
                min={minPrice}
                max={maxPrice}
                step={1000}
                value={filterOptions.priceRange}
                onValueChange={handlePriceChange}
                className="mb-4"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">{formatPrice(filterOptions.priceRange[0])}</span>
                <span className="text-sm">{formatPrice(filterOptions.priceRange[1])}</span>
              </div>
            </div>

            <Separator />

            {/* Brand filter */}
            <div>
              <h3 className="font-medium mb-3">Brand</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={filterOptions.brand.includes(brand)}
                      onCheckedChange={() => handleBrandChange(brand)}
                    />
                    <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Wireless/Wired filter */}
            <div>
              <h3 className="font-medium mb-3">Connection Type</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wireless"
                    checked={filterOptions.wireless === true}
                    onCheckedChange={() => handleWirelessChange(true)}
                  />
                  <label htmlFor="wireless" className="text-sm cursor-pointer">
                    Wireless
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="wired"
                    checked={filterOptions.wireless === false}
                    onCheckedChange={() => handleWirelessChange(false)}
                  />
                  <label htmlFor="wired" className="text-sm cursor-pointer">
                    Wired
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            {/* Sort options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Sort by:</span>
                <Select
                  value={sortOption}
                  onValueChange={(value) => setSortOption(value as SortOption)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your criteria</p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
