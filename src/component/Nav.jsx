import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");              //search

  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-white" : "text-white";
  };
  const navLinkHoverStyles = "hover:bg-blue-200 p-3";

  const handleSearchChange = (e) => {                  //search
    setSearchQuery(e.target.value); 
  };
  // const handleSearchClick = () => {
  //   console.log("Search query:", searchQuery);
  //   // Perform the search action here
  // };
    const handleSearchClick = () => {
      navigate(`/search?query=${searchQuery}`);
    };

  return (
    <>
      <nav className="bg-gray-800 font-bold z-10 p-8 ">
        <ul className="flex space-x-4">
          <li className="font-bold text-blue-200 pr-10 font mr-10 text-2xl">
            TechTop
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
          {/* Add Search Input and Button */}
          <li className="flex items-center ml-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 rounded-l-md border-none focus:outline-none"
            />
            <button
              type="button"
              className="p-2 bg-blue-500 rounded-r-md hover:bg-blue-600"
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
