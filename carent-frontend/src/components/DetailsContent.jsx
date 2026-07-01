import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { carData } from "../data/cars";
import { Settings2, Fuel, Snowflake, ShieldCheck } from "lucide-react";

export default function DetailsContent({ defaultId }) {
  const { id } = useParams();
  const carId = id || defaultId;

  // Find the exact car by ID
  const activeCar = carData ? carData.find((car) => car.id === carId) : null;

  // State for the primary image preview
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (activeCar) {
      setActiveImage(activeCar.image);
    }
  }, [activeCar]);

  if (!activeCar) {
    return (
      <div className="text-center py-24 bg-gray-50 text-gray-500">
        <h2 className="text-2xl font-bold text-gray-800">Vehicle Not Found</h2>
        <p className="mt-2 text-sm">
          The vehicle you are looking for does not exist.
        </p>
      </div>
    );
  }

  // Gallery thumbnail setup
  const matchingTypeCars = carData.filter(
    (c) => c.type === activeCar.type && c.id !== activeCar.id,
  );
  const carImages = [
    activeCar.image,
    matchingTypeCars[0]?.image || activeCar.image,
    matchingTypeCars[1]?.image || activeCar.image,
  ].filter(Boolean);

  // Specifications structured for the 4-card grid
  const specs = [
    {
      label: "Gear",
      value: activeCar.transmission || "Automat",
      icon: <Settings2 size={20} className="text-gray-400" />,
    },
    {
      label: "Fuel",
      value: activeCar.fuel || "PB 95",
      icon: <Fuel size={20} className="flex text-gray-400 " />,
    },
    {
      label: "AC",
      value: activeCar.ac ? "Yes" : "No",
      icon: <Snowflake size={20} className="text-gray-400" />,
    },
    {
      label: "Type",
      value: activeCar.type,
      icon: <ShieldCheck size={20} className="text-gray-400" />,
    },
  ];

  const equipment = [
    "Climatronic Air Conditioning",
    "Multimedia Touchscreen Display",
    "Keyless Central Locking System",
    "ABS & ESP Active Safety Features",
    "Park Assist Audio Sensors",
    "Power Windows & Heated Mirrors",
  ];

  return (
    <div className="bg-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Scaled-Down Gallery Container */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <p className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Car Details
            </p>

            {/* REDUCED SIZE: Main Image Wrapper */}
            <div className="w-full h-40 sm:h-80 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
              <img
                src={activeImage || activeCar.image}
                alt={activeCar.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Precision Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {carImages.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`h-16 sm:h-20 rounded-xl overflow-hidden bg-white border-2 transition-all ${
                    activeImage === imgUrl
                      ? "border-blue-600"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Technical Details Grid & Equipment */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-6 lg:pt-0">
            <div>
              {/* Header Titles */}
              <div className="mb-4">
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {activeCar.name}
                </h1>
                <p className="text-xl font-bold text-blue-600 mt-1">
                  ${activeCar.price}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    / day
                  </span>
                </p>
              </div>

              {/* FIXED: Technical Specification 4-Card Compact Grid Layout */}
              <div className="mb-4">
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Technical Specification
                </h2>
                <div className="grid grid-cols-4 gap-3">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-gray-50/70 border border-gray-100 p-3.5 rounded-xl flex flex-col gap-2"
                    >
                      <div className="flex justify-center items-center gap-2">
                        {spec.icon}
                        <span className="block text-xs text-center font-semibold text-gray-400 uppercase tracking-wider">
                          {spec.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-center font-bold text-gray-800">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Car Equipment Features List */}
              <div>
                <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Car Equipment
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {equipment.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs font-medium text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-blue-600 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action CTA Action Button Layout */}
            <div>
              <Link
                to={`/checkout/${activeCar.id}`}
                className="w-full sm:w-auto mt-4 sm:mt-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-all shadow-sm focus:outline-none"
              >
                Rent car
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
