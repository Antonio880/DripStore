import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";
import NavigationMenu from "./NavigationMenu";
import ProductFilter from "./ProductFilter/ProductFilter";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(3);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchActive(false);
    }
  };

  const isProductsPage = location.pathname === "/produtos";

  return (
    <header className="font-inter pb-4 md:pb-0 px-6 pt-4 md:px-28 md:pt-8">
      <div className="flex justify-between items-center md:justify-around">
        <div className="flex items-center md:hidden">
          <AiOutlineMenu className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>
        <div className="flex items-center justify-center md:justify-start md:flex-none">
          <img src="icon_drip_store.svg" alt="Digital Store Logo" className="w-8 h-8" />
          <h1 className="text-2xl md:text-4xl font-bold text-primary pl-2">Digital Store</h1>
        </div>
        <div className="hidden md:block">
          <SearchInput onChange={handleSearchChange} onSearch={handleSearchSubmit} />
        </div>
        <div className="hidden md:flex items-center">
          <button className="p-4">
            <u>Cadastre-se</u>
          </button>
          <CustomButton>Entrar</CustomButton>
        </div>
        <div className="relative flex items-center cursor-pointer">
          <AiOutlineSearch className="text-2xl md:hidden" onClick={handleSearchClick} />
          <img src="carrinho.svg" className="w-8 h-8 md:w-10 md:h-10 ml-4" alt="Carrinho" />
          <div className="absolute top-0 right-0 bg-[#EE4266] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
            {cartItemCount}
          </div>
        </div>
      </div>

      {/* Input de Pesquisa - Mobile */}
      {isSearchActive && (
        <div className="flex justify-center mt-4">
          <div className="relative w-[280px] max-w-sm">
            <input
              type="text"
              placeholder="Pesquisar Produto..."
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              className="bg-gray-100 rounded-md p-3 pl-3 pr-10 w-full"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={handleSearchSubmit}>
              <CiSearch className="text-gray-400" size={22} />
            </div>
          </div>
          <div className="flex items-center">
            <AiOutlineClose
              color="black"
              size={20}
              className="text-2xl ml-4 cursor-pointer"
              onClick={handleSearchClick}
            />
          </div>
        </div>
      )}

      <div className="hidden md:block">
        <NavigationMenu />
      </div>

      {/* Barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden w-3/4`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-dark-gray-2 font-bold">Páginas</h2>
          <AiOutlineClose
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        {isProductsPage ? <ProductFilter /> : <NavigationMenu />}
        {!isProductsPage && (
          <div className="mt-auto pt-[400px] flex flex-col items-center pb-8">
            <span className="flex h-0.5 my-6 bg-light-gray-2 transition-all duration-500 ease-in-out w-5/6" />
            <CustomButton>Entrar</CustomButton>
            <button className="p-4 tracking-widest">
              <u>Cadastre-se</u>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
