"use client";

import { useState } from "react";
import { navItems } from "@/constants/index";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-10 relative">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Driansh Softtech"
              className="h-16 w-auto"
            />
            <div className="hidden sm:block">
              <h2 className="font-bold text-lg text-foreground">
                Driansh Softech
              </h2>
              <p className="text-sm text-muted-foreground -mt-1">
                VoIP Solutions Startup
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown ? setActiveDropdown(item.name) : null
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path || "#"}
                  className="flex items-center space-x-1 font-medium text-md text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Full-width Desktop Dropdown */}
      <AnimatePresence>
        {activeDropdown &&
          navItems.find((item) => item.name === activeDropdown)?.dropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-full left-0 w-screen bg-gray-100 z-40 shadow-xl overflow-hidden"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="container mx-auto px-10 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {navItems
                  .find((item) => item.name === activeDropdown)
                  ?.dropdown?.map((dropItem, idx) => (
                    <Link
                      key={idx}
                      href={dropItem.path}
                      className="block text-gray-800 hover:text-blue-600 transition-colors py-1"
                    >
                      {dropItem.label}
                    </Link>
                  ))}
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white rounded-lg shadow-lg mt-3 border border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.path || "#"}
                    className="block font-medium text-gray-700 py-2 hover:text-blue-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          href={dropItem.path}
                          className="block text-sm text-gray-600 py-1 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact-us"
                className="mt-3 bg-blue-600 text-white text-center px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
