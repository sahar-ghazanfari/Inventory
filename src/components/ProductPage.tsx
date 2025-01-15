"use client";
import { useEffect, useState } from "react";
import NewProduct from "./NewProduct";
import ProductList from "./ProductList";
import Filter from "./Filter";

function ProductPage() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [products, setProducts] = useState<
    {
      title: string;
      quantity: number;
      category: string;
    }[]
  >([]);
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);

  useEffect(() => {
    const storedCategories = localStorage.getItem("categories");
    const storedProducts = localStorage.getItem("products");

    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    }

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
      setFilteredProducts(JSON.parse(storedProducts));  
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

  const handleAddProduct = (product: {
    title: string;
    quantity: number;
    category: string;
  }) => {
    setProducts((prev) => [...prev, product]);
    setFilteredProducts((prev) => [...prev, product]);
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
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default ProductPage;

// "use client";
// import { useState } from "react";
// import NewProduct from "./NewProduct";
// import ProductList from "./ProductList";
// import Filter from "./Filter";

// function ProductPage() {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [newCategory, setNewCategory] = useState<string>("");
//   const [products, setProducts] = useState<
//     {
//       title: string;
//       quantity: number;
//       category: string;
//     }[]
//   >([]);
//   const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);

//   const handleAddCategory = (e: React.FormEvent) => {
//     e.preventDefault();
//     setCategories((prev) => [...prev, newCategory]);
//     setNewCategory("");
//   };

//   const handleAddProduct = (product: {
//     title: string;
//     quantity: number;
//     category: string;
//   }) => {
//     setProducts((prev) => [...prev, product]);
//     setFilteredProducts((prev) => [...prev, product]);
//   };

//   return (
//     <div className="flex lg:flex-row-reverse flex-col justify-between">
//       <div className="flex w-full justify-center">
//         <Filter
//           categories={categories}
//           setFilteredProducts={setFilteredProducts}
//           products={products}
//         />
//       </div>
//       <div className="flex w-full justify-center">
//         <NewProduct
//           categories={categories}
//           setCategories={setCategories}
//           newCategory={newCategory}
//           setNewCategory={setNewCategory}
//           handleAddCategory={handleAddCategory}
//           handleAddProduct={handleAddProduct}
//         />
//       </div>
//       <div className="lg:hidden flex justify-center mt-6">
//         <ProductList products={filteredProducts} />
//       </div>
//     </div>
//   );
// }

// export default ProductPage;
