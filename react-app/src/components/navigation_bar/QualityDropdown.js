import React, { useState } from 'react';
import { MenuItems } from './QualityMenuItems';
import './QualityDropdown.css';
import { Link } from 'react-router-dom';

function QualityDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'qualitydropdown-menu clicked' : 'qualitydropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default QualityDropdown;
