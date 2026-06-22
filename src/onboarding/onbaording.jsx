import React from "react";
import { Link } from "react-router-dom";
import { Car } from "lucide-react";
import benz from "../assets/benz-2.jpg";

export default function Onboarding() {
  return (
    <div className="min-h-screen bg-white relative overflow-auto flex flex-col md:flex-row">
      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-[-80px] left-[-80px] w-80 h-80 bg-blue-700 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-blue-500 opacity-15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-800 opacity-10 blur-[150px] rounded-full pointer-events-none" />

      {/* ════════════════════════════════
           LEFT / MOBILE COLUMN
      ════════════════════════════════ */}
      <div className="relative z-10 flex flex-col flex-1 px-7 pt-10 pb-12 md:px-12 md:pt-12 md:max-w-md lg:max-w-lg xl:max-w-xl md:justify-between">
        {/* Logo + Brand — top left */}
        <Link
          to="/"
          className="flex items-center gap-1 font-bold text-lg text-black"
        >
          <Car size={24} className="text-primary" />
          Carent
        </Link>

        {/* Car image — mobile only */}
        <div className="md:hidden relative mt-10 mb-6 rounded-2xl overflow-hidden h-56">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/40 via-blue-300/60 to-white z-0" />
          <img
            src={benz}
            alt="Premium car"
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20" />
        </div>

        {/* Bottom text + CTA */}
        <div className="mt-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-3">
            Rent Premium Cars.
            <br />
            <span className="text-blue-600">Anytime, Anywhere.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-10 max-w-sm">
            Choose from economy to luxury. Hourly or daily rentals, all at the
            best price.
          </p>

          <Link
            to="/signin"
            className="inline-flex items-center justify-center w-full md:w-auto md:min-w-[200px] py-4 px-10 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base tracking-wide shadow-lg shadow-blue-600/40 transition-all duration-200 hover:scale-[1.02] hover:shadow-blue-500/50"
          >
            Continue
          </Link>
        </div>
      </div>

      {/* ════════════════════════════════
           RIGHT COLUMN — desktop only
      ════════════════════════════════ */}
      <div className="hidden md:flex flex-1 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-white/80 to-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[120px] rounded-full" />

        <img
          src={benz}
          alt="Premium rental car"
          className="relative z-10 w-full max-w-2xl object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.4)]"
        />

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-20" />
      </div>
    </div>
  );
}
