import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';

const NavigationMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const navItems = ['Home', 'Categorias', 'Produtos', 'Contato'];

  return (
    <div className="flex py-10">
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          label={item}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default NavigationMenu;
