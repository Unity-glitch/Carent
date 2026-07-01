import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import carBg from "../assets/car-bg.jpg";
import StarField from "../onboarding/StarField";

const locationOptions = ["New York", "Los Angeles", "Chicago", "Miami"];

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const rentalInputRef = useRef(null);
  const returnInputRef = useRef(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${month} / ${day} / ${year}`;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/vehicles");
  };

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
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start">
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-full px-7 py-3.5 transition-colors">
              Reserve now
            </button>
            <button
              type="button"
              onClick={() => navigate("/vehicles")}
              className="border border-border text-ink bg-white rounded-full px-7 py-3.5 transition hover:border-primary hover:text-primary"
            >
              Explore fleet
            </button>
          </div>
        </div>

        {/* Booking Card */}
        <div className="relative z-10 bg-white rounded-2xl p-6 md:p-7 shadow-xl w-full max-w-sm lg:ml-auto">
          <h2 className="font-bold text-center text-xl text-ink mb-5">
            Book your car
          </h2>
          <form onSubmit={handleSearch} className="flex flex-col gap-3">
            <label className="sr-only" htmlFor="pickup-location">
              Pickup location
            </label>
            <select
              id="pickup-location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white cursor-pointer h-11"
            >
              <option value="">Pickup location</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

            <label className="sr-only" htmlFor="dropoff-location">
              Drop-off location
            </label>
            <select
              id="dropoff-location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-3 text-sm text-muted focus:outline-none focus:ring-2 focus:ring-primary bg-white cursor-pointer h-11"
            >
              <option value="">Drop-off location</option>
              {locationOptions.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>

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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
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
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold rounded-full py-3.5 mt-2 transition-colors w-full">
              Search available cars
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
