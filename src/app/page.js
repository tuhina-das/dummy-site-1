"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Summer Dress",
    price: "$29.99",
    image: "/vercel.svg",
    tags: ["dress", "summer", "fashion"],
  },
  {
    id: 2,
    name: "Floral Skirt",
    price: "$24.99",
    image: "/vercel.svg",
    tags: ["skirt", "floral", "casual"],
  },
  {
    id: 3,
    name: "Classic Blouse",
    price: "$19.99",
    image: "/vercel.svg",
    tags: ["blouse", "classic", "office"],
  },
  {
    id: 4,
    name: "Summer Dress",
    price: "$29.99",
    image: "/vercel.svg",
    tags: ["dress", "summer", "fashion"],
  },
  {
    id: 5,
    name: "Floral Skirt",
    price: "$24.99",
    image: "/vercel.svg",
    tags: ["skirt", "floral", "casual"],
  },
  {
    id: 6,
    name: "Classic Blouse",
    price: "$19.99",
    image: "/vercel.svg",
    tags: ["blouse", "classic", "office"],
  },
  {
    id: 7,
    name: "Summer Dress",
    price: "$29.99",
    image: "/vercel.svg",
    tags: ["dress", "summer", "fashion"],
  },
  {
    id: 8,
    name: "Floral Skirt",
    price: "$24.99",
    image: "/vercel.svg",
    tags: ["skirt", "floral", "casual"],
  },
  {
    id: 9,
    name: "Classic Blouse",
    price: "$19.99",
    image: "/vercel.svg",
    tags: ["blouse", "classic", "office"],
  },
  {
    id: 10,
    name: "Summer Dress",
    price: "$29.99",
    image: "/vercel.svg",
    tags: ["dress", "summer", "fashion"],
  },
  {
    id: 11,
    name: "Floral Skirt",
    price: "$24.99",
    image: "/vercel.svg",
    tags: ["skirt", "floral", "casual"],
  },
  {
    id: 12,
    name: "Classic Blouse",
    price: "$19.99",
    image: "/vercel.svg",
    tags: ["blouse", "classic", "office"],
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.tags.some((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleSearch = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 py-8">
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-4"
      >
        Welcome to the Coolest Store Ever
      </motion.h1>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-2 text-lg text-gray-600 mb-8"
      >
        Shop for your favorite products at our store
      </motion.h2>

      <form onSubmit={handleSearch} className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
        />
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="rounded-2xl shadow-lg overflow-hidden"
          >
            <CardContent className="p-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <div className="mt-4 flex justify-between items-center">
                  <Button variant="default" className="rounded-full px-6">
                    <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                  <Star className="text-yellow-500 h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
