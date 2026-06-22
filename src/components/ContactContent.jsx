import React, { useState } from "react";

const carTypes = ["Sedan", "SUV", "Coupe", "Convertible", "Van", "Truck"];
const rentalPlaces = [
  "Lagos Island",
  "Victoria Island",
  "Ikeja",
  "Lekki",
  "Abuja",
  "Port Harcourt",
];
const returnPlaces = [
  "Lagos Island",
  "Victoria Island",
  "Ikeja",
  "Lekki",
  "Abuja",
  "Port Harcourt",
];

function SelectField({ placeholder, options, value, onChange }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer bg-indigo-500 bg-opacity-50 text-white text-sm rounded-xl px-4 py-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-white/30 placeholder-indigo-200"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-gray-900 bg-white">
            {o}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-indigo-200">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

function DateField({ placeholder, value, onChange }) {
  const inputRef = React.useRef(null);
  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer bg-indigo-500 bg-opacity-50 text-white text-sm rounded-xl px-4 py-3 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-white/30 scheme:dark"
        placeholder={placeholder}
      />
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-indigo-200">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  );
}

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Opening hours",
    value: "Sun-Mon: 10am – 10pm",
  },
];

export default function ContactContent() {
  const [carType, setCarType] = useState("");
  const [rentalPlace, setRentalPlace] = useState("");
  const [returnPlace, setReturnPlace] = useState("");
  const [rentalDate, setRentalDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleBook = (e) => {
    e.preventDefault();
    alert("Booking submitted!");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 space-y-12">
      {/* ── Top: form + image ── */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Booking form card */}
        <div className="bg-indigo-600 rounded-3xl p-8 flex flex-col gap-4">
          <h2 className="text-white text-2xl font-bold text-center mb-2">
            Book your car
          </h2>

          <SelectField
            placeholder="Car type"
            options={carTypes}
            value={carType}
            onChange={setCarType}
          />
          <SelectField
            placeholder="Place of rental"
            options={rentalPlaces}
            value={rentalPlace}
            onChange={setRentalPlace}
          />
          <SelectField
            placeholder="Place of return"
            options={returnPlaces}
            value={returnPlace}
            onChange={setReturnPlace}
          />
          <DateField
            placeholder="Rental date"
            value={rentalDate}
            onChange={setRentalDate}
          />
          <DateField
            placeholder="Return date"
            value={returnDate}
            onChange={setReturnDate}
          />

          <button
            onClick={handleBook}
            className="mt-2 w-full bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 rounded-xl transition-colors duration-200 text-sm tracking-wide"
          >
            Book now
          </button>
        </div>

        {/* Car image */}
        <div className="rounded-3xl overflow-hidden h-80 md:h-auto min-h-80">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
            alt="Luxury car available for rental"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Bottom: contact info bar ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {contactInfo.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            {/* Icon circle */}
            <div className="shrink-0 w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-white">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
              <p className="text-sm font-bold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
