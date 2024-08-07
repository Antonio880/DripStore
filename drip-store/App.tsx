import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './src/pages/HomePage';
import ProductPage from './src/pages/ProductPage';
export default function App(){
    return(
        <Routes>
            <Route path='/home'  element={<HomePage />}/>
            <Route path='/produtos'  element={<ProductPage />}/>
        </Routes>
    )
}