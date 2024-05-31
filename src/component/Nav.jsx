import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-white" : "text-white";
  };
  const navLinkHoverStyles = "hover:bg-blue-200 p-3";

  return (
    <>
      <nav className="bg-gray-800 font-bold  p-8">
        <ul className="flex space-x-4">
          <li className="font-bold text-blue-200 pr-10 mr-10 text-2xl">
            GIZTOP.
          </li>

          <li>
            <div className="relative">
              <div
                className="phone-item"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <NavLink
                  className={
                    navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
                  }
                  to="/"
                >
                  PHONE
                </NavLink>

                {dropdownVisible && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-black border border-gray-200 rounded-md p-4 shadow-lg z-10 w-40">
                    <li>Samsung</li>
                    <li>Apple</li>
                    <li>google</li>
                    <li>Huawei</li>
                    <li>Xiaomi</li>
                  </div>
                )}
              </div>
            </div>
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="computer"
            >
              COMPUTER
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="game"
            >
              GAME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="sale"
            >
              SALE
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="search"
            >
              search
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
