import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = ({ currentRole = "mentee" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Join Us", href: "#why-join-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Trusted By", href: "#trusted-by" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Text Logo */}
          <div className="flex-shrink-0 font-bold text-2xl md:text-3xl">
            <Link
              to={currentRole === "mentor" ? "/mentor" : "/mentee"}
              className="text-green-600 no-underline hover:text-green-700 transition-colors duration-200"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              elevateLink
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/mentee"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentRole === "mentee"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              I am a Mentee
            </Link>
            <Link
              to="/mentor"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                currentRole === "mentor"
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Become a Mentor
            </Link>
            <Link
              to="/login"
              className="text-green-600 px-4 py-2 rounded-md text-sm font-medium hover:text-green-700 transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              to={`/register?role=${currentRole}`}
              className="bg-green-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-2">
                <Link
                  to="/mentee"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-center w-full px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentRole === "mentee"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  I am a Mentee
                </Link>
                <Link
                  to="/mentor"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-center w-full px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentRole === "mentor"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Become a Mentor
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center text-green-600 px-4 py-2 rounded-md text-sm font-medium hover:text-green-700 transition-colors duration-200"
                >
                  Log In
                </Link>
                <Link
                  to={`/register?role=${currentRole}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
