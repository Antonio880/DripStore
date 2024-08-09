import React, { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductFilter from "../components/ProductFilter/ProductFilter";

interface ProductPageProps {
  searchQuery: string;
  totalResults: number;
}

const ProductPage: React.FC<ProductPageProps> = ({
  searchQuery = "Tênis",
  totalResults = 389,
}) => {
  const [sortOption, setSortOption] = useState("relevance");

  const sortOptions = {
    relevance: "Mais relevantes",
    priceAsc: "Mais baratos",
    priceDesc: "Mais caros",
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
    // Lógica para ordenar os produtos de acordo com a opção selecionada
  };

  return (
    <main className="bg-[#F5F5F5]">
      <div className="flex justify-between px-16 py-10">
        <label htmlFor="sortOptions" className="flex items-center text-lg">
          <p className="font-semibold">Resultados para "{searchQuery}"</p>&nbsp; - &nbsp;{totalResults} Produtos
        </label>
        <select
          name="sortOptions"
          id="sortOptions"
          className="mt-2 p-3 mr-5 border border-black rounded-sm"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option
            value="relevance"
            disabled
            className="font-bold"
          >{`Ordenar por: ${sortOptions[sortOption]}`}</option>
          {Object.entries(sortOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-grow w-full  px-8 md:px-16">
        <div className="hidden md:flex">
          <ProductFilter />
        </div>
        <div className="flex-grow">
          <ProductList classname="grid-cols-2 md:grid-cols-3 px-4" />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
