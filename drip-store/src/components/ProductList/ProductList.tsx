import React from 'react';
import ProductCard from '../ProductCard';
import { products } from './data';

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-10 p-4">
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
