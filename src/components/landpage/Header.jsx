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
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Text Logo */}
          <div className="flex-shrink-0 font-bold text-xl sm:text-2xl lg:text-3xl">
            <Link
              to={currentRole === "mentor" ? "/mentor" : "/mentee"}
              className="text-blue-600 no-underline hover:text-blue-700 transition-colors duration-200"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              elevateLink
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on tablet and mobile */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-2 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons - Desktop only */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Link
              to="/mentee"
              className={`px-3 xl:px-4 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${currentRole === "mentee"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              I am a Mentee
            </Link>

            <Link
              to="/mentor"
              className={`px-3 xl:px-4 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${currentRole === "mentor"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Become a Mentor
            </Link>

            <Link
              to="/login"
              className="text-green-600 px-3 xl:px-4 py-2 rounded-md text-xs xl:text-sm font-medium hover:text-green-700 transition-colors duration-200 whitespace-nowrap"
            >
              Log In
            </Link>
            <Link
              to={`/register?role=${currentRole}`}
              className="bg-green-500 text-white px-4 xl:px-6 py-2 rounded-md text-xs xl:text-sm font-medium hover:bg-green-600 transition-colors duration-200 whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* Tablet-specific compact buttons */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <Link
              to="/login"
              className="text-green-600 px-3 py-1.5 rounded-md text-sm font-medium hover:text-green-700 transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              to={`/register?role=${currentRole}`}
              className="bg-green-500 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile & Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Navigation Links */}
              <div className="space-y-1 mb-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 hover:bg-gray-50 block px-3 py-2.5 text-base font-medium transition-colors duration-200 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Role Selection Buttons - Tablet and Mobile */}
              <div className="border-t border-gray-100 pt-4 mb-4">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <Link
                    to="/mentee"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${currentRole === "mentee"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    I am a Mentee
                  </Link>

                  <Link
                    to="/mentor"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${currentRole === "mentor"
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                  >
                    Become a Mentor
                  </Link>
                </div>
              </div>

              {/* Auth Buttons - Mobile only (hidden on tablet since they're in header) */}
              <div className="md:hidden border-t border-gray-100 pt-4 space-y-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center text-green-600 px-4 py-2.5 rounded-md text-sm font-medium hover:text-green-700 hover:bg-green-50 transition-colors duration-200"
                >
                  Log In
                </Link>
                <Link
                  to={`/register?role=${currentRole}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-green-500 text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-green-600 transition-colors duration-200"
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
