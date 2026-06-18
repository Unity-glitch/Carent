import React from "react";
// Replace these paths if your store SVG asset icons are located elsewhere
import appStoreImage from "../assets/app-play-store.svg";
import googlePlayImage from "../assets/google-play-store.svg";

export default function DownloadAppTwo() {
  // Public active YouTube video loop stream IDs featuring premium car aesthetics
  const youtubeVideoIds = ["n4WkPZ3S7pE", "2g811a7Z0fA"];

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 grid lg:grid-cols-2 gap-10 items-center bg-white">
      {/* Left Text Block Column */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-4 text-center sm:text-left">
          Download mobile app
        </h2>
        <p className="text-gray-500 max-w-md mb-8 text-center sm:text-left text-sm leading-relaxed">
          Book, manage, and track your rental from your phone. Get the app and
          take Car Rental wherever you go.
        </p>
        <div className="flex gap-2 justify-center sm:justify-start">
          <img
            className="w-30 cursor-pointer object-contain"
            src={appStoreImage}
            alt="App Store"
          />
          <img
            className="w-30 cursor-pointer object-contain"
            src={googlePlayImage}
            alt="Google Play"
          />
        </div>
      </div>

      {/* Right Dual Smartphone Video Mockups Column */}
      <div className="flex justify-center gap-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`w-44 h-88 rounded-[2.5rem] border-[6px] border-black bg-black relative overflow-hidden shadow-xl ${
              i === 1 ? "mt-8" : ""
            }`}
          >
            {/* Phone Speaker/Camera Top Notch Overlay */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20" />

            {/* Embed Player Stream Frame Container */}
            <div className="w-full h-full z-10 relative pointer-events-none">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoIds[i]}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoIds[i]}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1`}
                className="absolute top-1/2 left-1/2 w-[300%] h-[100%] -translate-x-1/2 -translate-y-1/2 object-cover scale-150"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                title={`car-app-loop-${i}`}
              />
              {/* Protective surface glass overlay layer */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
