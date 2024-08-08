import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import { products } from './data';

interface ProductListProps {
  classname?: string;
}

const ProductList: React.FC<ProductListProps> = ({ classname }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 375);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    console.log(isSmallScreen);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayedProducts = isSmallScreen ? products.slice(0, 4) : products;

  return (
    <div className={`grid ${classname} gap-4 pb-10 `}>
      {displayedProducts.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          category={product.category}
          price={product.price}
          discount={product.discount}
          imageSrc={product.imageSrc}
          price_old={product.price_old}
        />
      ))}
    </div>
  );
};

export default ProductList;
