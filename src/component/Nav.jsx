import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-sm text-white" : "text-white";
  };
  const navLinkHoverStyles = "hover:bg-blue-200 p-1 rounded";

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSearchClick = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <>
      <nav className="bg-slate-700 font-bold z-10 p-4 md:p-8">
        <div className="flex justify-between items-center">
          <a href="/contentful-mobile/">
            <div className="font-bold text-blue-200 pr-10 font mr-10 text-2xl">
              TechTop
            </div>
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 mt-4 md:mt-0`}
        >
          <li className="relative md:mr-4">
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
                <ul className="absolute top-full left-0 mt-2 bg-white text-black border border-gray-200 rounded-md p-4 shadow-lg z-10 w-40">
                  <li>Samsung</li>
                  <li>Apple</li>
                  <li>Google</li>
                  <li>Huawei</li>
                  <li>Xiaomi</li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="laptop"
            >
              LAPTOP
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
          <li className="flex items-center mt-4 md:mt-0 md:ml-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-1.5 rounded-l-md border-none focus:outline-none text-sm"
            />
            <button
              type="button"
              className="p-1 bg-blue-200 rounded-r-md hover:bg-blue-200"
              onClick={handleSearchClick}
            >
              <i className="fas fa-search"></i>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
