"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/constants/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* 🔹 Services Dropdown */
function ServicesDropdown({ dropdown }: { dropdown: any[] }) {
  const col1 = dropdown.filter((d) => d.title === "VOIP DEVELOPMENT");
  const col2 = dropdown.filter((d) => d.title === "OPEN SOURCE");
  const col3 = dropdown.filter((d) =>
    [
      "PLATFORM",
      "DEVOPS SERVICES",
      "PRODUCT ENGINEERING",
      "VOIP SERVICES",
    ].includes(d.title)
  );
  const col4 = dropdown.filter((d) =>
    ["MOBILE APP DEVELOPMENT", "WEB DEVELOPMENT"].includes(d.title)
  );
  const columns = [col1, col2, col3, col4];

  return (
    <div className="container mx-auto px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {columns.map((col, i) => (
        <div key={i} className="space-y-6">
          {col.map((section: any, idx: number) => (
            <div key={idx}>
              {section.path ? (
                <Link
                  href={section.path}
                  className="font-bold text-gray-900 mb-3 block text-[18px] hover:text-blue-600"
                >
                  {section.title}
                </Link>
              ) : (
                <h4 className="font-bold text-gray-900 mb-3 text-[18px]">
                  {section.title}
                </h4>
              )}
              {section.items.length > 0 &&
                section.items.map((item: any, i: number) => (
                  <Link
                    key={i}
                    href={item.path}
                    className="block text-[17px] text-black hover:text-blue-600 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* 🔹 Solutions Dropdown */
function SolutionsDropdown({ dropdown }: { dropdown: any[] }) {
  const all = dropdown[0].items;
  const col1 = all.slice(0, 5);
  const col2 = all.slice(5, 10);
  const col3 = all.slice(10);

  return (
    <div className="container mx-auto px-10 py-10">
      <h4 className="font-bold text-gray-900 mb-5 text-[18px] uppercase">
        {dropdown[0].title}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[col1, col2, col3].map((col, i) => (
          <div key={i}>
            {col.map((item: any, idx: number) => (
              <Link
                key={idx}
                href={item.path}
                className="block text-[17px] text-black hover:text-blue-600 py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🔹 Mobile Nav Item */
function MobileNavItem({ item, setIsMenuOpen }: any) {
  const [open, setOpen] = useState(false);

  if (item.dropdown) {
    return (
      <div className="border-b border-gray-200 pb-2">
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left font-medium text-gray-800 py-2 flex justify-between items-center hover:text-blue-600"
        >
          {item.name}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="ml-4 mt-2 space-y-3"
            >
              {item.dropdown.map((section: any, idx: number) => (
                <div key={idx}>
                  {section.path ? (
                    <Link
                      href={section.path}
                      className="block font-semibold text-gray-900 text-[15px] hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {section.title}
                    </Link>
                  ) : (
                    <h4 className="font-semibold text-gray-900 text-[15px]">
                      {section.title}
                    </h4>
                  )}
                  {section.items.length > 0 && (
                    <div className="ml-3 mt-1 space-y-1">
                      {section.items.map((dropItem: any, j: number) => (
                        <Link
                          key={j}
                          href={dropItem.path}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.path || "#"}
      className="block font-medium text-gray-700 py-2 hover:text-blue-600"
      onClick={() => setIsMenuOpen(false)}
    >
      {item.name}
    </Link>
  );
}

/* 🔹 Main Navbar */
export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeItem = navItems.find((i) => i.name === activeDropdown);

  useEffect(() => {
    const whiteBgRoutes = ["/contact-us"]; // 👈 replace with your actual white page path
    const handleScroll = () => setIsScrolled(window.scrollY > 60);

    if (whiteBgRoutes.includes(pathname)) {
      setIsScrolled(true);
      window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(window.scrollY > 60);
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* 🔸 Mobile Header */}
          <div className="flex lg:hidden w-full justify-between items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.jpg"
                alt="Driansh Softtech"
                className="h-14 w-auto"
              />
            </Link>
          </div>

          {/* 🔸 Desktop Logo */}
          <Link
            href="/"
            className="hidden lg:flex items-center space-x-4 px-10"
          >
            <img
              src="/logo.jpg"
              alt="Driansh Softtech"
              className="h-16 w-auto rounded-xl"
            />
            <div>
              <h2
                className={`font-bold text-lg ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Driansh Softech
              </h2>
              <p
                className={`text-sm ${
                  isScrolled ? "text-gray-500" : "text-gray-200"
                } -mt-1`}
              >
                VoIP Solutions Startup
              </p>
            </div>
          </Link>

          {/* 🔸 Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto px-10">
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
                  className={`flex items-center space-x-2 font-medium text-[16px] transition-colors ${
                    isScrolled
                      ? "text-gray-800 hover:text-blue-600"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </div>
            ))}
            <Link
              href="/contact-us"
              className="bg-[#007bff] text-white px-6 py-3.5 rounded-sm font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </Link>
          </nav>
        </div>
      </div>

      {/* 🔸 Desktop Dropdowns */}
      <AnimatePresence>
        {activeDropdown && activeItem?.dropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-screen bg-gray-100 z-40 shadow-xl overflow-hidden"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {activeItem.name === "SERVICES" && (
              <ServicesDropdown dropdown={activeItem.dropdown} />
            )}
            {activeItem.name === "SOLUTIONS" && (
              <SolutionsDropdown dropdown={activeItem.dropdown} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔸 Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-50 border-t border-gray-200 shadow-inner px-6 py-4 space-y-2"
          >
            {navItems.map((item, idx) => (
              <MobileNavItem
                key={idx}
                item={item}
                setIsMenuOpen={setIsMenuOpen}
              />
            ))}

            {/* 🔸 Mobile Contact link */}
            <Link
              href="/contact-us"
              className="block font-medium text-gray-800 py-2 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT&nbsp;US
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
