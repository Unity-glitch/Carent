import { useState, useRef } from "react";
import carBg from "../assets/car-bg.jpg";
import StarField from "../onboarding/StarField";
import { Star } from "lucide-react";

export default function Hero() {
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const rentalInputRef = useRef(null);
  const returnInputRef = useRef(null);

  // Helper to format date display beautifully (e.g., "MM / DD / YYYY")
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${month} / ${day} / ${year}`;
  };

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-black/60 bg-blend-overlay"
      style={{ backgroundImage: `url(${carBg})` }}
    >
      <StarField />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div className="relative z-10">
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-5 max-w-lg text-center sm:text-left">
            Experience the road like never before
          </h1>
          <p className="text-white/80 max-w-md mb-8 text-center sm:text-left">
            Find the perfect car for your next trip and hit the road with
            confidence, comfort, and a price that fits your budget.
          </p>
          <div className="flex justify-center sm:justify-start">
            <button className="bg-indigo hover:bg-indigo-dark text-white font-semibold rounded-full px-7 py-3.5 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <StarField />
        {/* Booking Card */}
        <div className="relative z-10 bg-white rounded-2xl p-6 md:p-7 shadow-xl w-full max-w-sm lg:ml-auto">
          <h2 className="font-bold text-center text-xl text-ink mb-5">
            Book your car
          </h2>
          <div className="flex flex-col gap-3">
            <select className="w-full border border-border rounded-lg px-4 py-3 text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white cursor-pointer h-11">
              <option>Car type</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Sport</option>
            </select>

            <select className="w-full border border-border rounded-lg px-4 py-3 text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white cursor-pointer h-11">
              <option>Place of rental</option>
            </select>

            <select className="w-full border border-border rounded-lg px-4 py-3 text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white cursor-pointer h-11">
              <option>Place of return</option>
            </select>

            {/* Custom Styled Rental Date Picker Field */}
            <div className="relative w-full">
              <button
                type="button"
                onClick={() => rentalInputRef.current?.showPicker()}
                className="w-full border border-border rounded-lg px-4 py-3 text-left text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white h-11 flex items-center justify-between"
              >
                <span>
                  {rentalDate ? formatDate(rentalDate) : "Date of rental"}
                </span>
                <svg
                  className="w-4 h-4 text-muted/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 2 0 002-2V7a2 2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <input
                ref={rentalInputRef}
                type="date"
                value={rentalDate}
                onChange={(e) => setRentalDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
              />
            </div>

            {/* Custom Styled Return Date Picker Field */}
            <div className="relative w-full">
              <button
                type="button"
                onClick={() => returnInputRef.current?.showPicker()}
                className="w-full border border-border rounded-lg px-4 py-3 text-left text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white h-11 flex items-center justify-between"
              >
                <span>
                  {returnDate ? formatDate(returnDate) : "Date of return"}
                </span>
                <svg
                  className="w-4 h-4 text-muted/60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <input
                ref={returnInputRef}
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
              />
            </div>
            <StarField />
            <button className="bg-indigo hover:bg-indigo-dark text-white font-semibold rounded-full py-3.5 mt-2 transition-colors w-full">
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
