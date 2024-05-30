import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-white" : "text-white";
  };
  const navLinkHoverStyles = "hover:bg-blue-200"; 

  return (
    <nav className="bg-gray-800 font-bold  p-4">
      <ul className="flex space-x-4">
        <li className="font-bold text-blue-200 pr-10 mr-10">GIZTOP.</li>
        <li>
          <NavLink
            className={
              navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
            }
            to="/"
          >
            PHONE
          </NavLink>
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
  );
};

export default Nav;
