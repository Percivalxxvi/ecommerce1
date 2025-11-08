import React from 'react'
import { Link } from "react-router-dom";

const Navmob = () => {
  return (
    <nav className='flex'>
      {/* Desktop Links */}
      <ul className="flex items-center space-x-8 text-gray-700 bg-amber-950 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-blue-600">
              Shop
            </Link>
          </li> 
      <li>
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </li> 
      <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li> 
      </ul>
    </nav>
  );
}

export default Navmob