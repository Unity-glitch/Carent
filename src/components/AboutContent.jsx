import React, { useEffect, useRef, useState } from "react";
import carLoop3 from "../assets/car-loop-2.mp4";

// Animated counter hook
function useCountUp(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

function StatCounter({ value, suffix = "+", label, startCounting }) {
  const count = useCountUp(value, 2000, startCounting);
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-extrabold text-indigo-600">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-gray-500 mt-1 font-medium">{label}</p>
    </div>
  );
}

const features = [
  {
    title: "Variety Brands",
    desc: "Choose from top car brands including economy, SUVs, luxury, and more to suit any trip.",
  },
  {
    title: "Awesome Support",
    desc: "Our support team is available around the clock to help you with anything you need.",
  },
  {
    title: "Maximum Freedom",
    desc: "Pick up and drop off at locations that suit your schedule, with no hidden fees.",
  },
  {
    title: "Flexibility On The Go",
    desc: "Modify or cancel your booking anytime with our easy-to-use mobile platform.",
  },
];

const benefits = [
  "GPS-enabled vehicles for smooth navigation",
  "Enjoy pristine cars from trusted dealerships",
  "Support available anytime from our team",
  "High-end vehicles available at affordable rates",
];

export default function AboutContent() {
  const statsRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  //   Video play/pause state
  const [playing, setPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);
  const hideTimer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(hideTimer.current);
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-20">
      {/* Left headline */}
      <div>
        <h2 className="text-3xl md:text-4xl text-center font-extrabold text-gray-900 leading-tight">
          Where every drive feels extraordinary
        </h2>
      </div>
      {/* ── Features grid ── */}
      {/* ── Video ── */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Video */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-xl bg-black aspect-video"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={carLoop3}
            autoPlay
            muted
            loop
            playsInline
          />
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}
          >
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none"
            >
              {playing ? (
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-white ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Right: 2x2 feature blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f) => (
            <div key={f.title}>
              <h3 className="text-base text-center sm:text-center md:text-left font-bold text-gray-900 mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed text-center sm:text-center md:text-left">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <div
        ref={statsRef}
        className="grid grid-cols-3 gap-6 border-t border-b border-gray-100 py-10"
      >
        <StatCounter
          value={20}
          suffix="k+"
          label="Happy customers"
          startCounting={startCounting}
        />
        <StatCounter
          value={540}
          suffix="+"
          label="Count of cars"
          startCounting={startCounting}
        />
        <StatCounter
          value={25}
          suffix="+"
          label="Years of experience"
          startCounting={startCounting}
        />
      </div>

      {/* ── Bottom: text left, image right ── */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Left: copy + benefit list */}
        <div>
          <h2 className="text-2xl text-center sm:text-center md:text-left md:text-4xl font-extrabold text-gray-900 leading-tight mb-5">
            Unlock unforgettable memories on the road
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            From weekend escapes to cross-country adventures, our fleet puts you
            behind the wheel of the perfect car — every time.
          </p>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm text-gray-600">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: scenic road trip image */}
        <div className="rounded-3xl overflow-hidden shadow-xl h-80 md:h-96">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80"
            alt="Open road scenic drive"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
