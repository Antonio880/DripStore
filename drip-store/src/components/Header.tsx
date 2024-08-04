import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";
import NavigationMenu from "./NavigationMenu";
import { useState } from "react";

export default function Header() {
  const [cartItemCount, setCartItemCount] = useState(3); // Exemplo com 3 itens

  return (
    <header className="flex flex-col font-inter px-28 pt-8">
      <div className="flex justify-around">
        <div className="flex">
          <div className="flex items-center">
            <img src="icon_drip_store.svg" alt="" />
          </div>
          <div className="flex items-center text-primary pl-2">
            <h1 className="text-4xl font-bold">Digital Store</h1>
          </div>
        </div>
        <SearchInput />
        <div>
          <button className="p-4">
            <u>Cadastre-se</u>
          </button>
        </div>
        <CustomButton children={"Entrar"} />
        <div className="relative flex cursor-pointer">
          <img src="carrinho.svg" className="w-10" alt="Carrinho" />
          <div className="absolute top-1 left-6 bg-[#EE4266] text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
            {cartItemCount}
          </div>
        </div>
      </div>
      <NavigationMenu />
    </header>
  );
}
