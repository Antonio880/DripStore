import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pagination from "../components/Pagination";
import CustomButton from "../components/CustomButton";

const pages = [
  {
    title: "Queima de estoque Nike 🔥",
    description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    imgSrc: "tenis.svg"
  },
  {
    title: "Queima de estoque Nike 🔥",
    description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    imgSrc: "tenis.svg"
  },
  // Adicione mais páginas conforme necessário
];

const Carousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = pages.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const paginate = (newDirection: number) => {
    setCurrentPage((prev) => (prev + newDirection + totalPages) % totalPages);
  };

  return (
    <div className="relative w-full">
      <AnimatePresence initial={false} custom={currentPage}>
        <motion.div
          key={currentPage}
          custom={currentPage}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -1000) {
              paginate(1);
            } else if (swipe > 1000) {
              paginate(-1);
            }
          }}
          className="cursor-pointer flex justify-evenly bg-[#F5F5F5] w-full px-28"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-warning font-bold">
              Melhores ofertas personalizadas
            </h2>
            <h1 className="text-6xl py-4 flex justify-center font-bold w-[480px]">
              {pages[currentPage].title}
            </h1>
            <p className="text-xl w-[480px] text-dark-gray-2">
              {pages[currentPage].description}
            </p>
            <div className="pt-8">
              <CustomButton>{pages[currentPage].buttonText}</CustomButton>
            </div>
          </div>
          <div>
            <img className="" src={pages[currentPage].imgSrc} alt="" />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center pb-10">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Carousel;
