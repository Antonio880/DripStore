import React from "react";
import Collection from "../components/Collection";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList/ProductList";
import SpecialOfferCard from "../components/SpecialOfferCard";
import EmphasisCollection from "../components/EmphasisCollection";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="flex-grow w-full">
        <div className="flex justify-around bg-[#F5F5F5] w-full px-28">
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
            <div className="flex justify-between px-9">
              <h1 className="text-dark-gray-2 text-2xl font-bold py-18">
                Produtos em alta
              </h1>
              <button className="text-xl text-primary">Ver todos ➔</button>
            </div>
            <ProductList />
          </div>
        </div>
        <div className=" px-28">
          <SpecialOfferCard />
        </div>
      </div>
    </main>
  );
}

