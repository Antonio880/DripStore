
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import ProductPage from "./src/pages/ProductPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/produtos" element={<ProductPage />} />
    </Routes>
  );
import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';
import DetailsPage from './src/pages/DetailsPage';

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/home", element: <HomePage /> },
    { path: "/produtos", element: <ProductPage /> },
    { path: "/produtos/:id", element: <DetailsPage /> },
  ]);

  return routes;
};

export default function App(){
    return <AppRoutes />;
}
