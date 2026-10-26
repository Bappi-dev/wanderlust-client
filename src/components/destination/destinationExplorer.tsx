"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DestinationCard, {
  type Destination,
} from "@/components/destination/destinationCard";

interface DestinationExplorerProps {
  destinations: Destination[];
}

const PRICE_RANGES = [
  { value: "all", label: "All Prices", test: () => true },
  { value: "under-1000", label: "Under $1,000", test: (p: number) => p < 1000 },
  {
    value: "1000-2000",
    label: "$1,000 – $2,000",
    test: (p: number) => p >= 1000 && p < 2000,
  },
  {
    value: "2000-3000",
    label: "$2,000 – $3,000",
    test: (p: number) => p >= 2000 && p < 3000,
  },
  {
    value: "over-3000",
    label: "Over $3,000",
    test: (p: number) => p >= 3000,
  },
] as const;

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
] as const;

const parsePrice = (price: string | number) =>
  Number(String(price).replace(/[^0-9.]/g, "")) || 0;

const DestinationExplorer = ({ destinations }: DestinationExplorerProps) => {
  const [category, setCategory] = React.useState("all");
  const [priceRange, setPriceRange] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("all");

  const categories = React.useMemo(
    () => Array.from(new Set(destinations.map((d) => d.category))).filter(Boolean),
    [destinations]
  );

  const range = PRICE_RANGES.find((r) => r.value === priceRange) ?? PRICE_RANGES[0];

  const visible = destinations
    .filter((d) => category === "all" || d.category === category)
    .filter((d) => range.test(parsePrice(d.price)))
    .toSorted((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return parsePrice(a.price) - parsePrice(b.price);
        case "price-desc":
          return parsePrice(b.price) - parsePrice(a.price);
        case "name-asc":
          return a.destinationName.localeCompare(b.destinationName);
        default:
          return 0;
      }
    });

  return (
    <div>
      {/* Filters */}
      <div className="grid gap-3 sm:grid-cols-3">
        <Select value={category} onValueChange={(value) => setCategory(String(value))}>
          <SelectTrigger className="w-full rounded-full px-4">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={priceRange}
          onValueChange={(value) => setPriceRange(String(value))}
        >
          <SelectTrigger className="w-full rounded-full px-4">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            {PRICE_RANGES.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={(value) => setSortBy(String(value))}>
          <SelectTrigger className="w-full rounded-full px-4">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <p className="mt-5 text-sm text-muted-foreground">
        Showing {visible.length} destinations.
      </p>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((destination, index) => (
            <DestinationCard
              key={destination._id ?? destination.id ?? `${destination.destinationName}-${index}`}
              destination={destination}
            />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed p-10 text-center text-sm text-muted-foreground">
          No destinations found matching your filters.
        </div>
      )}
    </div>
  );
};

export default DestinationExplorer;
