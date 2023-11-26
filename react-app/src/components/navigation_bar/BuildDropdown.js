import React, { useState } from 'react';
import { MenuItems } from './BuildMenuItems';
import './BuildDropdown.css';
import { Link } from 'react-router-dom';

function BuildDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'builddropdown-menu clicked' : 'builddropdown-menu'}
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

export default BuildDropdown;
