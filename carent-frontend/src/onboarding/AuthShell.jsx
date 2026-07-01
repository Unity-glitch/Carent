import { Link } from "react-router-dom";
import carBg from "../assets/car-1.jpeg";
import benzBg from "../assets/benz-1.png";
import logoWhite from "../assets/logo-white.png";

const moduleConfig = {
  customer: {
    title: "Customer",
    subtitle: "Book vehicles, manage your trips, and enjoy seamless rentals.",
    image: carBg,
    alt: "Customer booking experience",
    accent: "bg-indigo-700/80",
  },
  driver: {
    title: "Driver",
    subtitle: "Sign in to manage rides, earnings, and driver schedules.",
    image: benzBg,
    alt: "Driver onboarding",
    accent: "bg-emerald-700/80",
  },
  admin: {
    title: "Admin",
    subtitle:
      "Manage users, bookings, and driver operations from one dashboard.",
    image: logoWhite,
    alt: "Admin control panel",
    accent: "bg-amber-700/80",
  },
};

export default function AuthShell({
  moduleType = "customer",
  pageTitle,
  pageSubtitle,
  children,
  secondaryText,
  secondaryLink,
  secondaryLabel,
}) {
  const config = moduleConfig[moduleType] || moduleConfig.customer;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex items-center justify-center px-4 py-8">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl md:grid-cols-[1.35fr_1fr]">
        <div className="relative hidden md:flex items-center justify-center bg-slate-900 text-white overflow-hidden">
          <img
            src={config.image}
            alt={config.alt}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="relative z-10 mx-8 max-w-md space-y-6">
            <span
              className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white ${config.accent}`}
            >
              {moduleType}
            </span>
            <h1 className="text-4xl font-bold leading-tight">{config.title}</h1>
            <p className="max-w-sm text-sm leading-7 text-slate-100/90">
              {config.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white p-8 sm:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                {pageTitle}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                {pageTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {pageSubtitle}
              </p>
            </div>

            {children}

            {secondaryText && secondaryLink && secondaryLabel && (
              <p className="mt-8 text-sm text-slate-500">
                {secondaryText}{" "}
                <Link
                  to={secondaryLink}
                  className="font-semibold text-slate-900 hover:text-slate-700"
                >
                  {secondaryLabel}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
