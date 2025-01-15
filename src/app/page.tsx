import ProductPage from "@/components/ProductPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory",
};

export default function Home() {
  return (
    <div>
      <h1 className="bg-backgroundTitle flex justify-center py-2 text-xl font-bold text-textColor items-center gap-4">
        Inventory Management App
      </h1>
      <ProductPage />
    </div>
  );
}
