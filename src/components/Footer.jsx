import { MapPin, Mail, Phone, Car, X } from "lucide-react";
import appStoreImage from "../assets/app-play-store.svg";
import googlePlayImage from "../assets/google-play-store.svg";

const usefulLinks = ["About us", "Contact us", "Gallery", "Blog", "F.A.Q"];
const vehicleTypes = ["Sedan", "Cabriolet", "Pickup", "Minivan", "SUV"];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  width: 18,
  height: 18,
};

const Facebook = () => (
  <svg {...iconProps}>
    <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H8v3h2v6h3v-6h3l1-3h-4V10a1 1 0 0 1 1-1z" />
  </svg>
);

const Instagram = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
  </svg>
);

const Youtube = () => (
  <svg {...iconProps}>
    <rect x="2" y="6" width="20" height="12" rx="4" />
    <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Section: Branding & Contact Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center md:justify-between gap-6 ">
        <a href="#" className="flex items-center gap-2 font-bold text-ink">
          <Car size={22} className="text-primary" /> Carent
        </a>

        {/* Contact Badges container: Centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm w-full md:w-auto">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="bg-accent text-white rounded-full p-2 shrink-0">
              <MapPin size={16} />
            </span>
            <div>
              <p className="text-muted text-xs">Address</p>
              <p className="font-semibold text-ink">
                Oxford Ave. Cary, NC 27511
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="bg-accent text-white rounded-full p-2 shrink-0">
              <Mail size={16} />
            </span>
            <div>
              <p className="text-muted text-xs">Email</p>
              <p className="font-semibold text-ink">nwiger@yahoo.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="bg-primary text-white rounded-full p-2 shrink-0">
              <Phone size={16} />
            </span>
            <div>
              <p className="text-muted text-xs">Phone</p>
              <p className="font-semibold text-ink">+537 547-6401</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Grid Columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        {/* About Column */}
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-sm text-muted mb-4 max-w-xs">
            Reliable rentals, friendly service, and a fleet that&apos;s always
            ready for your next trip.
          </p>
          <div className="flex gap-3 text-ink">
            <Facebook />
            <Instagram />
            <X size={18} />
            <Youtube />
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="font-semibold text-ink mb-4">Useful links</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-ink">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Vehicles Column */}
        <div>
          <h4 className="font-semibold text-ink mb-4">Vehicles</h4>
          <ul className="flex flex-col gap-2 text-sm text-muted">
            {vehicleTypes.map((type) => (
              <li key={type}>
                <a href="#" className="hover:text-ink">
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* App Downloads Column */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-semibold text-ink mb-4">Download App</h4>
          <div className="flex gap-2 justify-center sm:justify-start">
            <img
              className="w-30 cursor-pointer"
              src={appStoreImage}
              alt="App Store"
            />
            <img
              className="w-30 cursor-pointer"
              src={googlePlayImage}
              alt="Google Play"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
