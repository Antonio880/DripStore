import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';
import { useNavigate } from 'react-router-dom';

const NavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const navigate = useNavigate();
  
  const handleItemClick = (index: number, item: string) => {
    setActiveIndex(index);
    navigate("/"+item.toLowerCase());
  };

  const navItems = ['Home', 'Produtos', 'Categorias', 'Meus Pedidos'];

  return (
    <div className="flex py-10">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          label={item}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index, item)}
        />
      ))}
    </div>
  );
};

export default NavigationMenu;
