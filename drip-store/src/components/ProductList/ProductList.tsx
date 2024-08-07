import React from 'react';
import ProductCard from '../ProductCard';
import { products } from './data';

interface ProductListProps {
  classname?: string;
}

const ProductList: React.FC<ProductListProps> = ({ classname }) => {
  return (
    <div className={`grid ${classname} gap-4 pb-10 `}>
      {products.map((product, index) => (
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
