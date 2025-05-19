import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Install with `npm install react-icons`

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-[#5364cd] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
        {/* Logo */}
        <div className="text-xl font-semibold">
          <a href="/">
            <img className="w-16" src="/logo-icon.png" alt="McAfee Activate" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 text-lg font-medium">
          <a href="/demo">
            <button className="hover:bg-red-600 transition-colors py-3 px-4 rounded-lg">
              Get Download
            </button>
          </a>
          <button
            onClick={() => navigate("/blog")}
            className="hover:bg-red-600 transition-colors py-3 px-4 rounded-lg"
          >
            Blog
          </button>
          <Link to="/#Contacts">
            <button className="hover:bg-red-600 transition-colors py-3 px-4 rounded-lg">
              Contacts
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#3c5891] text-base px-6 py-4 space-y-3">
          <a href="/demo" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-left hover:bg-red-600 py-2 px-4 rounded-lg">
              Get Download
            </button>
          </a>
          <button
            onClick={() => {
              navigate("/blog");
              setMenuOpen(false);
            }}
            className="w-full  hover:bg-red-600 py-2 px-4 rounded-lg"
          >
            Blog
          </button>
          <Link to="/#Contacts" onClick={() => setMenuOpen(false)}>
            <button className="w-full text-left hover:bg-red-600 py-2 px-4 rounded-lg">
              Contacts
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
