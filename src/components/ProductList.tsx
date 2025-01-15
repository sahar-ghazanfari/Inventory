import React from "react";

type ProductListProps = {
  products: { title: string; quantity: number; category: string }[];
};

function ProductList({ products = [] }: ProductListProps) {
  return (
    <div className="w-3/4 lg:w-full">
      <h2 className="label font-bold">Product List</h2>
      <hr className="my-4" />
      <div>
        {products.length === 0 ? (
          <p className="flex justify-center text-2xl text-textColor">
            No products available
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-48 overflow-y-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white h-fit p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-titleH2">
                  {product.title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">
                  {product.quantity.toLocaleString()}
                  <span className="font-medium">Toman</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  <span className="font-medium">Category:</span>
                  {product.category}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;
