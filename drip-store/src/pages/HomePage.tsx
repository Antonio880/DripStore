import React from "react";
import Collection from "../components/Collection";
import Carousel from "../components/Carousel/Carousel";
import ProductList from "../components/ProductList/ProductList";
import SpecialOfferCard from "../components/SpecialOfferCard";
import EmphasisCollection from "../components/EmphasisCollection";
import { products } from "../components/ProductList/data";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="flex bg-[#F5F5F5] flex-col items-center w-full">
      <div className="flex-grow w-full">
        <div className="flex justify-around bg-[#F5F5F5] w-full md:px-28">
          <Carousel />
        </div>
        <div className="flex justify-center">
          <Collection />
        </div>
        <div className="flex justify-center">
          <EmphasisCollection />
        </div>
        <div className="flex justify-center">
          <div>
            <div className="flex justify-between px-8 md:px-9">
              <h1 className="text-dark-gray-2 text-lg md:text-2xl font-bold py-18">
                Produtos em alta
              </h1>
              <button className="md:text-xl text-primary" onClick={() => navigate("/produtos")}>Ver todos ➔</button>
            </div>
            <ProductList products={products} classname={"grid-cols-2 md:grid-cols-4 p-4"} />
          </div>
        </div>
        <div className="bg-white px-7 md:px-28">
          <SpecialOfferCard />
        </div>
      </div>
    </main>
  );
}

