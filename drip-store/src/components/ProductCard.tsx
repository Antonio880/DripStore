import React from "react";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  discount?: string;
  imageSrc: string;
  price_old?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  price,
  discount,
  imageSrc,
  price_old
}) => {
  return (
    <div className="cursor-pointer">
      <div className="relative bg-white shadow-xl py-6 mx-4 mb-4 rounded-md p-4 flex flex-col ">
        {discount && (
          <div className="bg-[#E7FF86] flex font-bold top-8 text-dark-gray-2 justify-center p-3 absolute left-8 rounded-3xl items-center z-10">
            {discount}
          </div>
        )}
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-auto mb-4 rounded-md"
        />
      </div>
      <div className="pl-6">
        <p className="text-gray-500 text-sm">{category}</p>
        <h2 className="text-2xl text-dark-gray-2">{name}</h2>
        <div className="flex gap-2">
          <p className="">
            <s className="text-lg text-light-gray">${price_old}</s>
          </p>
          <p className="text-lg font-bold text-dark-gray">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
