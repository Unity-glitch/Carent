import React from "react";
import appStoreImage from "../assets/app-play-store.svg";
import googlePlayImage from "../assets/google-play-store.svg";
import carLoop3 from "../assets/car-loop-3.mp4";

function PhoneMockup({ className = "" }) {
  return (
    <div
      className={`rounded-[3rem] border-[3px] border-gray-900 bg-white shadow-2xl relative p-3 pt-6 ${className}`}
    >
      {/* Speaker notch */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-900 rounded-full z-20" />
      {/* Screen */}
      <div className="w-full h-full rounded-[2.2rem] overflow-hidden bg-black relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={carLoop3}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
}

export default function DownloadAppTwo() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
      {/* Mobile: phone stacked above the banner */}
      <div className="flex md:hidden justify-center mb-8">
        <PhoneMockup className="w-48 h-100" />
      </div>

      <div className="relative">
        {/* Purple banner card */}
        <div className="bg-indigo-600 rounded-[2.5rem] overflow-hidden relative px-8 md:pl-64 lg:pl-72 md:pr-16 py-14 md:py-16">
          {/* Decorative repeating icon pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M5 11l1.2-3.6A2 2 0 0 1 8.1 6h7.8a2 2 0 0 1 1.9 1.4L19 11h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H8a2 2 0 1 1-4 0H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2z'/%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
              backgroundRepeat: "repeat",
            }}
          />

          <div className="relative z-10 text-center md:text-left">
            <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-3">
              Download our app
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Download mobile app
            </h2>
            <p className="text-indigo-100 text-sm leading-relaxed max-w-md mb-8 mx-auto md:mx-0">
              Book, manage, and track your rental from your phone. Get the app
              and take Car Rental wherever you go.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <img
                className="h-11 cursor-pointer"
                src={appStoreImage}
                alt="App Store"
              />
              <img
                className="h-11 cursor-pointer"
                src={googlePlayImage}
                alt="Google Play"
              />
            </div>
          </div>
        </div>

        {/* Desktop: phone overlapping the left edge of the banner */}
        <div className="hidden md:block absolute top-1/2 left-4 lg:left-10 -translate-y-1/2">
          <PhoneMockup className="w-52 h-110" />
        </div>
      </div>
    </section>
  );
}
