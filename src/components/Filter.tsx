import React from "react";
import ProductList from "./ProductList";

function Filter() {
  return (
    <div className="w-3/4 mt-10">
      <h2 className="label font-bold">Filter</h2>
      <hr className="my-4" />
      <div className="flex lg:flex-col flex-row justify-between w-full gap-6">
        <div className="lg:label">
          <label className="label hidden lg:block" htmlFor="search">
            search:
          </label>
          <input id="search" type="search" className="inputs" />
        </div>
        <div className="lg:label">
          <label htmlFor="sort" className="hidden lg:block">
            sort:
          </label>
          <select className="inputs" name="sort" id="sort">
            <option value="all">all</option>
            <option value="latest">latest</option>
            <option value="earliest">earliest</option>
          </select>
        </div>
        <div className="label">
          <label htmlFor="category" className="hidden lg:block">
            category:
          </label>
          <select className="inputs" name="category" id="category">
            <option value="all">all</option>
            <option></option>
          </select>
        </div>
      </div>
      <div className="hidden lg:block ">
        <ProductList />
      </div>
    </div>
  );
}

export default Filter;
