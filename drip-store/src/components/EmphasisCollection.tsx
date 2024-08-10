import { useState } from "react";
import Camisetas from "../assets/colections/camisetas.svg";
import Calcas from "../assets/colections/calca.svg";
import Headphones from "../assets/colections/headphone.svg";
import Tenis from "../assets/colections/tenis.svg";

export default function EmphasisCollection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const buttons = [
    { id: 0, image: Camisetas },
    { id: 1, image: Calcas },
    { id: 2, image: Calcas },
    { id: 3, image: Headphones },
    { id: 4, image: Tenis },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex justify-center text-2xl text-dark-gray-2 font-bold">
        Coleções em Destaque
      </h1>
      <div className="flex flex-row gap-16 mt-16">
        {buttons.map((button) => (
          <div className="bg-white flex items-center justify-center rounded-full p-8">
            <button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              style={{
                width: "64px",
                height: "64px",
                backgroundImage: `url(${button.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                filter:
                  selectedIndex === button.id
                    ? "invert(25%) sepia(70%) saturate(1000%) hue-rotate(270deg)"
                    : "invert(25%) sepia(0%) saturate(0%) hue-rotate(0deg)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
