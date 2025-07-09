import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Attempted Tests", path: "/attempted-tests" },
    { name: "Order History", path: "/order-history" },
  ];

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* App Title */}
        <span className="text-gray-700 font-semibold text-lg">
          User Profile Dashboard
        </span>
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium px-3 py-1 rounded transition
                ${
                  location.pathname === link.path
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-purple-700 hover:bg-purple-50"
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
