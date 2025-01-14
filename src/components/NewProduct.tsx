import React from "react";

function NewProduct() {
  return (
    <div className="w-3/4 mt-10">
      <div className="flex flex-col items-center">
        <button className="rounded-lg text-xl py-3 bg-backgroundTitle text-titleH2 font-bold w-full">
          + Add new category
        </button>
        <div className="w-full">
          <h2 className="text-xl font-bold my-4 text-titleH2">
            Add new product
          </h2>
          <form
            action=""
            className="p-4 flex flex-col bg-backgroundTitle rounded-lg gap-4"
          >
            <label htmlFor="product-title" className="label">
              Title
            </label>
            <input className="inputs" type="text" id="product-title" />
            <label htmlFor="quantity" className="label">
              quantity
            </label>
            <input className="inputs" type="number" id="quantity" />
            <label htmlFor="category" className="label flex flex-col gap-4">
              category
              <select className="inputs" name="category" id="category">
                <option>select a category</option>
              </select>
            </label>
            <button className="rounded-lg text-xl py-3 bg-btn text-textColor font-bold w-full">
              add new product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
