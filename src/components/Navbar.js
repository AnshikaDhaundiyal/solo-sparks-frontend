import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 px-4 text-sm font-medium rounded-lg ${
      isActive
        ? "bg-purple-700 text-white"
        : "text-gray-800 hover:bg-purple-100"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-700">✨ Solo Sparks</h1>

        <button
          className="md:hidden text-purple-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <div className={`md:flex gap-6 ${open ? "block mt-3" : "hidden md:block"}`}>
          <NavLink to="/" className={linkClass}>🏠 Home</NavLink>
          <NavLink to="/reflect" className={linkClass}>✍️ Reflect</NavLink>
          <NavLink to="/dashboard" className={linkClass}>📊 Dashboard</NavLink>
          <NavLink to="/rewards" className={linkClass}>🎁 Rewards</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
