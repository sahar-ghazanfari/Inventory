"use client"
import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";

type FilterProps = {
  categories: string[];
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<
      { title: string; quantity: number; category: string }[]
    >
  >;
  products: { title: string; quantity: number; category: string }[];
};

function Filter({ categories, setFilteredProducts, products }: FilterProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortOption, setSortOption] = useState<string>("all");
  const [localFilteredProducts, setLocalFilteredProducts] =
    useState<{ title: string; quantity: number; category: string }[]>(products);

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products;

      if (searchTerm) {
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategory !== "all") {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory
        );
      }

      if (sortOption === "latest") {
        filtered = filtered.sort((a, b) => (a.title > b.title ? -1 : 1));
      } else if (sortOption === "earliest") {
        filtered = filtered.sort((a, b) => (a.title < b.title ? -1 : 1));
      }

      setLocalFilteredProducts(filtered);
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchTerm, selectedCategory, sortOption, products, setFilteredProducts]);

  return (
    <div className="w-3/4 mt-10">
      <h2 className="label font-bold">Filter</h2>
      <hr className="my-4" />
      <div className="flex lg:flex-col flex-row justify-between w-full gap-2 lg:gap-6">
        {/* Search */}
        <div className="flex lg:flex-row items-center w-1/3 lg:w-full justify-between">
          <label className="label hidden lg:block" htmlFor="search">
            Search:
          </label>
          <input
            id="search"
            type="search"
            className="bg-transparent border py-3 rounded-lg w-full lg:w-2/4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Sort */}
        <div className="flex w-fit label items-center lg:w-full justify-between">
          <label htmlFor="sort" className="hidden lg:block">
            Sort:
          </label>
          <select
            className="inputs bg-transparent border py-2 rounded-lg w-full lg:w-fit"
            name="sort"
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="latest">Latest</option>
            <option value="earliest">Earliest</option>
          </select>
        </div>
        {/* Category */}
        <div className="flex w-1/3 items-center label lg:w-full justify-between">
          <label htmlFor="category" className="hidden lg:block label">
            Category:
          </label>
          <select
            className="inputs bg-transparent border py-2 rounded-lg w-full lg:w-fit"
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="hidden lg:block mt-6">
        <ProductList products={localFilteredProducts} />
      </div>
    </div>
  );
}

export default Filter;
