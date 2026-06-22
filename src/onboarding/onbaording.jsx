import React from "react";
import { Link } from "react-router-dom";
import carBg from "../assets/car-1.jpeg";

export default function Onboarding() {
  return (
    <div
      className="min-h-screen bg-black relative overflow-y-auto overflow-x-hidden flex flex-col md:flex-row"
      style={{
        backgroundImage: `url(${carBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-blue-700 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-15 right-15 w-72 h-72 bg-blue-500 opacity-15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-800 opacity-10 blur-[150px] rounded-full pointer-events-none" />

      {/* ════════════════════════════════
           LEFT / MOBILE COLUMN
      ════════════════════════════════ */}
      <div className="relative z-10 flex flex-col flex-1 px-7 pt-10 pb-20 md:px-12 md:pt-12 md:pb-12 md:w-1/2 md:justify-center md:items-start md:pl-20 items-center justify-end text-center md:text-left">
        {/* Car image — mobile only */}
        {/* mobile image removed — using same background on all sizes */}

        {/* Bottom text + CTA */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            Rent Premium Cars.
            <br />
            <span className="text-blue-400">Anytime, Anywhere.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10 max-w-sm">
            Choose from economy to luxury. Hourly or daily rentals, all at the
            best price.
          </p>

          <Link
            to="/signin"
            className="inline-flex items-center justify-center w-full md:w-auto md:min-w-50 py-4 px-10 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base tracking-wide shadow-lg shadow-blue-600/40 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/50"
          >
            Continue
          </Link>
        </div>
      </div>

      {/* ════════════════════════════════
           RIGHT COLUMN — desktop only
      ════════════════════════════════ */}
      {/* desktop image removed - using background image instead */}
    </div>
  );
}
