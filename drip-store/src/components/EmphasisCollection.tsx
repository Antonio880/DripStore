import { useState } from "react";
import Camisetas from "../assets/colections/camisetas.svg";
import Calcas from "../assets/colections/pants.svg";
import Headphones from "../assets/colections/fones.svg";
import Tenis from "../assets/colections/tenis.svg";

export default function EmphasisCollection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const buttons = [
    { id: 0, image: Camisetas, text: "Camisetas" },
    { id: 1, image: Calcas, text: "Calças" },
    { id: 2, image: Calcas, text: "Bonés" },
    { id: 3, image: Headphones, text: "Headphones" },
    { id: 4, image: Tenis, text: "Tênis" },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex justify-center text-2xl text-dark-gray-2 font-bold">
        Coleções em Destaque
      </h1>
      <div className="flex flex-row gap-16 mt-16 mb-40">
        {buttons.map((button) => (
          <div
            key={button.id}
            className="bg-white flex items-center justify-center rounded-full p-8 shadow-lg"
          >
            <button
              onClick={() => handleButtonClick(button.id)}
              style={{
                width: "64px",
                height: "64px",
                backgroundImage: `url(${button.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                filter:
                  selectedIndex === button.id
                    ? `brightness(0) saturate(100%) invert(26%) sepia(55%) saturate(4385%) hue-rotate(315deg) brightness(89%) contrast(88%)`
                    : "invert(25%) sepia(0%) saturate(0%) hue-rotate(0deg)",
              }}
            />
            <h3 className="absolute mt-48 font-bold text-sm text-[#474747] tracking-wider">
              {button.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
