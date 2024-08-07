import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import ProductFilter from '../components/ProductFilter/ProductFilter';

const ProductPage: React.FC = () => {
  return (
    <main className="flex flex-grow w-full bg-[#F5F5F5] p-6">
      <div>
        
      </div>
      <div className="flex">
        <ProductFilter />
      </div>
      <div className="flex-grow">
        <ProductList classname="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4" />
      </div>
    </main>
  );
};

export default ProductPage;
