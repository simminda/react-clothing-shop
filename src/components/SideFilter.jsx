import React, { useState } from 'react';
import '../style.css';

const SideFilter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{paddingRight:'25px'}}>
      <h3>Filters</h3>
      <hr></hr>

      <ul id="accordion" className="accordion">
        <li className={activeIndex === 0 ? 'active' : ''}>
          <div className="link" onClick={() => handleAccordionClick(0)}>
            Tops<i className={`bi bi-chevron-${activeIndex === 0 ? 'up' : 'down'}`}></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Formal Shirts</a>
            </li>
            <li>
              <a href="#">Casual Shirts</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
          </ul>
        </li>
        <hr></hr>
        <li className={activeIndex === 1 ? 'active' : ''}>
          <div className="link" onClick={() => handleAccordionClick(1)}>
            Bottoms<i className={`bi bi-chevron-${activeIndex === 1 ? 'up' : 'down'}`}></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Suit Pants</a>
            </li>
            <li>
              <a href="#">Chinos</a>
            </li>
            <li>
              <a href="#">Jeans</a>
            </li>
          </ul>
        </li>
        <hr></hr>
        <li className={activeIndex === 2 ? 'active' : ''}>
          <div className="link" onClick={() => handleAccordionClick(2)}>
            Soles<i className={`bi bi-chevron-${activeIndex === 2 ? 'up' : 'down'}`}></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Formal Shoes</a>
            </li>
            <li>
              <a href="#">Sneakers</a>
            </li>
            <li>
              <a href="#">Slippers</a>
            </li>
          </ul>
        </li>
        <hr></hr>
        <li className={activeIndex === 3 ? 'active' : ''}>
          <div className="link" onClick={() => handleAccordionClick(3)}>
            Accessories <i className={`bi bi-chevron-${activeIndex === 3 ? 'up' : 'down'}`}></i>
          </div>
          <ul className="submenu">
            <li>
              <a href="#">Hats</a>
            </li>
            <li>
              <a href="#">Watches</a>
            </li>
          </ul>
        </li>
        <hr></hr>
      </ul>
    </div>
  );
};

export default SideFilter;
