// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="flex flex-col md:flex-row items-start md:items-center justify-between bg-black text-white text-2xl font-bold p-1">
//       <Link to="/" className="p-4">
//         Home
//       </Link>

//       {/* Hamburger Menu - visible only on mobile */}
//       <div
//         className="md:hidden flex flex-col gap-2 fixed top-5 right-5 cursor-pointer"
//         onClick={() => setMenuOpen(!menuOpen)} // Toggle menu open state
//       >
//         <span className="block w-8 h-1 bg-white"></span>
//         <span className="block w-8 h-1 bg-white"></span>
//         <span className="block w-8 h-1 bg-white"></span>
//       </div>

//       {/* Navbar Links */}
//       <ul
//         className={`${
//           menuOpen ? "flex" : "hidden"
//         } flex-col md:flex md:flex-row font-bold text-2xl text-center w-full md:w-auto`}
//       >
//         <li className="p-2 w-full">
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "p-2 text-black font-bold bg-blue-600 block w-full md:bg-black md:text-blue-600"
//                 : "p-2 text-white hover:text-slate-400 block w-full md:text-white md:hover:text-slate-400"
//             }
//           >
//             About
//           </NavLink>
//         </li>
//         <li className="p-2 w-full">
//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive
//                 ? "p-2 text-black font-bold bg-blue-600 block w-full md:bg-black md:text-blue-600"
//                 : "p-2 text-white hover:text-slate-400 block w-full md:text-white md:hover:text-slate-400"
//             }
//           >
//             Services
//           </NavLink>
//         </li>
//         <li className="p-2 w-full">
//           <NavLink
//             to="/help"
//             className={({ isActive }) =>
//               isActive
//                 ? "p-2 text-black font-bold bg-blue-600 block w-full md:bg-black md:text-blue-600"
//                 : "p-2 text-white hover:text-slate-400 block w-full md:text-white md:hover:text-slate-400"
//             }
//           >
//             Help
//           </NavLink>
//         </li>
//         <li className="p-2 w-full">
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "p-2 text-black font-bold bg-blue-600 block w-full md:bg-black md:text-blue-600"
//                 : "p-2 text-white hover:text-slate-400 block w-full md:text-white md:hover:text-slate-400"
//             }
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ menuItems }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
    setSubDropdownOpen(null); 
  };

  const toggleSubDropdown = (index) => {
    setSubDropdownOpen(subDropdownOpen === index ? null : index);
  };

  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center justify-between bg-black text-white text-2xl font-bold p-1 w-full ">
      <Link to="/" className="p-4">
        Website
      </Link>

      
      <div
        className="md:hidden flex flex-col gap-2 fixed top-5 right-5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)} 
      >
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
        <span className="block w-8 h-1 bg-white"></span>
      </div>

      
      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center justify-center font-bold text-2xl text-center w-full md:w-auto p-2 mr-14`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="relative p-2 w-full md:w-auto md:group"
            onMouseEnter={() => toggleDropdown(index)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            {item.subMenu ? (
              <>
                <button
                  className={`flex justify-center items-center w-full md:w-auto ${
                    dropdownOpen === index ? "text-blue-600" : "text-white"
                  }`}
                  onClick={() => toggleDropdown(index)}
                >
                  {item.name}
                  <span className="md:hidden absolute right-2">▼</span>
                </button>
                <ul
                  className={`${
                    dropdownOpen === index
                      ? "block"
                      : "hidden md:group-hover:block"
                  } md:absolute md:top-full md:left-0 md:bg-black md:shadow-lg md:w-50 md:z-50 text-xl`}
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative p-2 w-full md:w-auto md:group"
                      onMouseEnter={() => toggleSubDropdown(subIndex)}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      {subItem.subMenu ? (
                        <>
                          <button
                            className={`flex justify-center items-center w-full md:w-auto  ${
                              subDropdownOpen === subIndex ? "text-blue-600" : "text-white"
                            }`}
                            onClick={() => toggleSubDropdown(subIndex)}
                          >
                            {subItem.name}
                            <span className="md:hidden absolute right-2">▼</span>
                          </button>
                          <ul
                            className={`${
                              subDropdownOpen === subIndex
                                ? "block"
                                : "hidden md:group-hover:block"
                            } md:absolute md:top-0 md:left-full md:bg-black md:shadow-lg md:w-48 md:z-50`}
                          >
                            {subItem.subMenu.map((subSubItem, subSubIndex) => (
                              <li key={subSubIndex} className="p-2 w-full md:w-auto">
                                <NavLink
                                  to={subSubItem.path}
                                  className={({ isActive }) =>
                                    isActive
                                      ? "text-black font-bold bg-blue-600 block text-lg"
                                      : "text-white hover:text-slate-400 block text-lg"
                                  }
                                >
                                  {subSubItem.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            isActive
                              ? "p-2 text-black font-bold bg-blue-600 block w-full md:bg-black md:text-blue-600"
                              : "p-2 text-white hover:text-slate-400 block w-full md:text-white md:hover:text-slate-400"
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "p-2 text-black font-bold bg-blue-600 block w-full md:bg-black md:text-blue-600"
                    : "p-2 text-white hover:text-slate-400 block w-full md:text-white md:hover:text-slate-400"
                }
              >
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
