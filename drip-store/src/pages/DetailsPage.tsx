import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/ProductList/data";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../components/CustomButton";
import "swiper/css";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || ""));

  useEffect(() => {
    console.log(product);
  }, [product]);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  return (
    <main className="p-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <img
                src={"tenis_product.svg"}
                alt={product.name}
                className="w-full h-auto rounded-md"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-lg md:text-xl text-gray-500">{product.category}</p>
          <div className="flex gap-2 mt-4">
            {product.price_old && (
              <p className="text-lg md:text-xl text-light-gray line-through">
                ${product.price_old}
              </p>
            )}
            <p className="text-lg md:text-xl font-bold text-dark-gray">
              ${product.price}
            </p>
          </div>
          <p className="mt-6 text-md md:text-lg">
            {/* Descrição do produto */}
          </p>
          <CustomButton children="Comprar"  />
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
