import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* 1️⃣ Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">KWIK SHOPPER</h2>
          <p className="text-gray-400 mb-4">
            Shop faster, smarter, and simpler. Your one-stop shop for everything
            you love.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Customer Support */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" /> support@kwikshopper.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" /> +234 801 234 5678
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" /> Lagos, Nigeria
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KWIK SHOPPER. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
