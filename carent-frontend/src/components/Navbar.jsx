import { useState } from "react";
import { Car, Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { label: "Home", path: "/" },
  { label: "Vehicles", path: "/vehicles" },
  { label: "Details", path: "/details/sedan-1" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 font-bold text-lg text-ink"
        >
          <img src={logo} alt="Carent Logo" className="w-8 h-8" />
          Carent
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 flex-1 justify-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname === link.path
                  ? "text-sm font-semibold text-ink border-b-2 border-primary py-1"
                  : "text-sm text-muted hover:text-ink py-1"
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <span className="bg-primary text-white rounded-full p-2.5">
              <Phone size={18} />
            </span>
            <div className="text-sm">
              <p className="text-muted">Need help?</p>
              <p className="font-semibold text-ink">+996 247-1680</p>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-white px-6 py-8 flex flex-col gap-5 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={
                location.pathname === link.path
                  ? "font-semibold text-ink"
                  : "text-muted"
              }
            >
              {link.label}
            </Link>
          ))}

          <a
            href="tel:+9962471680"
            className="bg-primary text-white p-3 rounded-full"
          >
            <Phone size={20} />
          </a>
        </div>
      )}
    </header>
  );
}
