import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-black.png";
import Logout from "../components/Logout";
import {
  fetchCurrentUser,
  getAvatarUrl,
  getStoredUser,
} from "../../../carent-backend/utils/authUser";

const links = [
  { label: "Home", path: "/home" },
  { label: "Vehicles", path: "/vehicles" },
  { label: "Orders", path: "/orders" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(getStoredUser());
  const location = useLocation();

  useEffect(() => {
    const syncUser = async () => {
      const storedUser = getStoredUser();
      if (storedUser) {
        setUser(storedUser);
        return;
      }

      const currentUser = await fetchCurrentUser();
      setUser(currentUser);
    };

    syncUser();
    window.addEventListener("auth:update", syncUser);

    return () => window.removeEventListener("auth:update", syncUser);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center font-bold text-lg text-ink"
        >
          <img src={logo} alt="Carent Logo" className="w-18 h-18 m-left" />
          <span className="m-left mt-1 text-1l">Carent</span>
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
          {user && (
            <div className="hidden lg:flex items-center gap-3 rounded-full  bg-gray-50 px-4 py-2 shadow-sm">
              <img
                src={getAvatarUrl(user)}
                alt={user.name || user.email || "User avatar"}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm text-ink">{user.name || "User"}</span>
              </div>
            </div>
          )}

          <div className="hidden lg:flex items-center gap-3">
            <Logout />
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

          {user && (
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 shadow-sm">
              <img
                src={getAvatarUrl(user)}
                alt={user.name || user.email || "User avatar"}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm font-semibold text-ink">
                {user.name || "User"}
              </span>
            </div>
          )}
          <Logout />
        </div>
      )}
    </header>
  );
}
