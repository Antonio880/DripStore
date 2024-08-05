import React from "react";
import CustomButton from "../components/CustomButton";
import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <main className='flex flex-grow w-full'>
      <div className="flex justify-around bg-[#F5F5F5] w-full px-28">
        <Carousel />
      </div>
    </main>
  );
}
