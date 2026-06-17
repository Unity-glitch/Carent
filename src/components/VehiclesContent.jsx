import { useState } from "react";
// 1. MAKE SURE THIS IMPORT PATH IS EXACTLY CRITICAL
import { carData } from "../data/cars";
import VehicleCard from "../cards/VehicleCard";
import BrandCarousel from "../components/BrandCarousel";

const categories = [
  "All Vehicles",
  "Sedan",
  "SUV",
  "Sport",
  "Pickup",
  "Minivan",
];

export default function VehiclesPage() {
  const [activeCategory, setActiveCategory] = useState("All Vehicles");

  // 2. Filter logic: Grabs exactly 9 unique cars depending on selection
  const filteredCars =
    activeCategory === "All Vehicles"
      ? carData.slice(0, 9) // Grabs the first 9 mixed entries from our big data pool
      : carData
          .filter(
            (car) => car.type.toLowerCase() === activeCategory.toLowerCase(),
          )
          .slice(0, 9); // Grabs 9 distinct ones matching the type

  return (
    <div className="bg-white min-h-screen">
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-ink mb-3">
            Choose the car that suits you
          </h2>
          <p className="text-muted text-sm max-w-md mx-auto">
            Browse our high-quality options tailored for your specific travel
            needs.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md scale-105"
                  : "bg-gray-100 text-muted hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Grid displaying the 9 unique cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCars.map((car) => (
            <VehicleCard key={car.id} {...car} />
          ))}
        </div>
      </section>

      <BrandCarousel />
    </div>
  );
}
