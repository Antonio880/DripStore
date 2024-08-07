import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";
import NavigationMenu from "./NavigationMenu";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(3);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <header className="font-inter px-6 pt-4 md:px-28 md:pt-8">
      {isSearchActive ? (
        <div className="flex justify-center">
          <div className=" relative w-[280px] max-w-sm">
            <input
              type="text"
              placeholder="Pesquisar Produto..."
              className="bg-gray-100 rounded-md p-3 pl-3 pr-10 w-full"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
      ) : (
        <div>
          <div className="flex justify-between items-center md:justify-around">
            <div className="flex items-center md:hidden">
              <AiOutlineMenu className="text-2xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center md:justify-start md:flex-none">
              <img
                src="icon_drip_store.svg"
                alt="Digital Store Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
              <h1 className="text-xl md:text-4xl font-bold text-primary pl-1 md:pl-2">
                Digital Store
              </h1>
            </div>
            <div className="hidden md:block">
              <SearchInput />
            </div>
            <div className="hidden md:flex items-center">
              <button className="p-4 tracking-widest">
                <u>Cadastre-se</u>
              </button>
              <CustomButton>Entrar</CustomButton>
            </div>
            <div className="relative flex items-center cursor-pointer">
              <AiOutlineSearch
                color="gray"
                className="text-2xl md:hidden"
                onClick={handleSearchClick}
              />
              <img
                src="carrinho.svg"
                className="w-8 h-8 md:w-10 md:h-10 ml-4"
                alt="Carrinho"
              />
              <div className="absolute top-0 right-0 bg-[#EE4266] text-white rounded-full w-4 h-4 md:h-6 md:w-6 flex items-center justify-center text-xs md:text-sm">
                {cartItemCount}
              </div>
            </div>
          </div>
          <div
            className={`transition-transform duration-300 ${
              isSearchActive ? "h-full" : "h-0"
            } overflow-hidden`}
          >
            <div className="w-full">
              <SearchInput />
            </div>
          </div>
          <div className="hidden md:block">
            <NavigationMenu />
          </div>
        </div>
      )}
    </header>
  );
}
