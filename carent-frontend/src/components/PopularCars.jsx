import { Link } from "react-router-dom";
import { carData } from "../data/cars";
import VehicleCard from "../cards/VehicleCard";

export default function PopularCars() {
  const homeCars = carData.slice(0, 9);

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted mb-2">
            Featured fleet
          </p>
          <h2 className="text-3xl font-bold text-ink">
            Popular rentals for every journey
          </h2>
          <p className="text-sm text-muted max-w-xl mt-3">
            Browse our most booked vehicles and find the best match for city
            trips, family travels, and weekend getaways.
          </p>
        </div>
        <Link
          to="/vehicles"
          className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
        >
          View full fleet
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeCars.map((car) => (
          <VehicleCard key={car.id} {...car} />
        ))}
      </div>
    </section>
  );
}
