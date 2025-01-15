"use client";
import { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import ProductList from "./ProductList";
import Filter from "./Filter";

type Product = {
  id: string;
  title: string;
  quantity: number;
  category: string;
};

function ProductPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    const storedProducts = localStorage.getItem("products");

    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }

    if (storedProducts) {
      const parsedProducts = JSON.parse(storedProducts);
      setProducts(parsedProducts);
      setFilteredProducts(parsedProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("products", JSON.stringify(products));
  }, [categories, products]);

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories((prev) => [...prev, newCategory]);
    setNewCategory("");
  };

  const handleDeleteProduct = (id: string) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const handleAddProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...product,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
    setProducts((prev) => [...prev, newProduct]);
    setFilteredProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="flex lg:flex-row-reverse flex-col justify-between">
      <div className="flex w-full justify-center">
        <Filter
          categories={categories}
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
      </div>
      <div className="flex w-full justify-center">
        <NewProduct
          categories={categories}
          setCategories={setCategories}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
          handleAddCategory={handleAddCategory}
          handleAddProduct={handleAddProduct}
        />
      </div>
      <div className="lg:hidden flex justify-center mt-6">
        <ProductList
          products={filteredProducts}
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
}

export default ProductPage;
