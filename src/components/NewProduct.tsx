"use client";
import { useState } from "react";
import NewCategory from "./NewCategory";

type NewProductProps = {
  categories: string[];
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
  newCategory: string;
  setNewCategory: React.Dispatch<React.SetStateAction<string>>;
  handleAddCategory: (e: React.FormEvent) => void;
  handleAddProduct: (product: {
    title: string;
    quantity: number;
    category: string;
  }) => void;
};

function NewProduct({
  categories,
  setCategories,
  newCategory,
  setNewCategory,
  handleAddCategory,
  handleAddProduct,
}: NewProductProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productTitle, setProductTitle] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleOpenCategory = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (productTitle && quantity > 0 && selectedCategory) {
      handleAddProduct({
        title: productTitle,
        quantity,
        category: selectedCategory,
      });
      setProductTitle("");
      setQuantity(0);
      setSelectedCategory("");
    }
  };

  return (
    <div className="w-3/4 mt-10">
      <div className="flex flex-col items-center">
        {isOpen ? (
          <div className="w-full">
            <NewCategory
              handleOpenCategory={handleOpenCategory}
              categories={categories}
              setCategories={setCategories}
              newCategory={newCategory}
              setNewCategory={setNewCategory}
              handleAddCategory={handleAddCategory}
            />
          </div>
        ) : (
          <button
            onClick={handleOpenCategory}
            className="rounded-lg text-xl py-3 bg-backgroundTitle text-titleH2 font-bold w-full"
          >
            + Add new category
          </button>
        )}
        <div className="w-full">
          <h2 className="text-xl font-bold my-4 text-titleH2">
            Add new product
          </h2>
          <form
            onSubmit={handleSubmitProduct}
            className="p-4 flex flex-col bg-backgroundTitle rounded-lg gap-4"
          >
            <label htmlFor="product-title" className="label">
              Title
            </label>
            <input
              className="inputs"
              type="text"
              id="product-title"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <label htmlFor="quantity" className="label">
              Quantity
            </label>
            <input
              className="inputs"
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <label htmlFor="category" className="label flex flex-col gap-4">
              Category
              <select
                className="inputs"
                name="category"
                id="select-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
            <button className="rounded-lg text-xl py-3 bg-btn text-textColor font-bold w-full">
              Add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;