import React from "react";

const logos = [
  {
    name: "Tesla",
    url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
  {
    name: "Honda",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg",
  },
  {
    name: "Toyota",
    url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Toyota_EU.svg",
  },
  {
    name: "BMW",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    name: "Volkswagen",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
  },
  {
    name: "Ford",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg",
  },
  {
    name: "Bugatti",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/60/Bugatti_logo.svg",
  },
  {
    name: "Acura",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/af/Acura_logo.svg",
  },
];

export default function BrandCarousel() {
  // Duplicating the list ensures a completely seamless loop without cutting off
  const dualLogos = [...logos, ...logos];

  return (
    <div className="w-full py-12 overflow-hidden relative my-12">
      {/* Real CSS keyframes — Tailwind's arbitrary-value brackets can't define
          a @keyframes block, which is why the animation wasn't running before */}
      <style>{`
        @keyframes brand-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 2rem)); }
        }
        .brand-marquee-track {
          animation: brand-marquee 25s linear infinite;
        }
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Visual fading gradients on left and right sides */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      {/* Inline automatic endless scrolling animation */}
      <div className="flex w-max items-center gap-16 brand-marquee-track">
        {dualLogos.map((logo, idx) => (
          <div
            key={idx}
            className="flex justify-center items-center w-30 h-10 shrink-0 transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logo.url}
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
