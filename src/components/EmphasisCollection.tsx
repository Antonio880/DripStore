import { useState } from "react";
import camisetas from "../../public/camisetas.svg";
import calcas from "../../public/pants.svg";
import headphones from "../../public/fones.svg";
import tenis from "../../public/tenis.svg";

export default function EmphasisCollection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const buttons = [
    { id: 0, image: camisetas, text: "Camisetas" },
    { id: 1, image: calcas, text: "Calças" },
    { id: 2, image: calcas, text: "Bonés" },
    { id: 3, image: headphones, text: "Headphones" },
    { id: 4, image: tenis, text: "Tênis" },
  ];

  const handleButtonClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-6 md:gap-16 mt-16 mb-12 mr-8">
        {buttons.map((button) => (
          <div
            key={button.id}
            className="bg-white flex cursor-pointer items-center justify-center rounded-full p-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => handleButtonClick(button.id)}
          >
            <button
              className="flex justify-center items-center"
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
            >
              <h3 className="absolute mt-40 font-bold text-sm text-[#474747] tracking-wider">
                {button.text}
              </h3>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
