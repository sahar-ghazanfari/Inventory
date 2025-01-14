import Filter from "@/components/Filter";
import NewProduct from "@/components/NewProduct";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div>
      <h1 className="bg-backgroundTitle flex justify-center py-2 text-xl font-bold text-textColor">
        Inventory Management App
      </h1>
      <div className="flex lg:flex-row-reverse flex-col justify-between">
        <div className="flex w-full justify-center">
          <Filter />
        </div>
        <div className="flex w-full justify-center">
          <NewProduct />
        </div>
        <div className="lg:hidden flex justify-center mt-6">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
