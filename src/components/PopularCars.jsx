import { carData } from "../data/cars";
import VehicleCard from "../cards/VehicleCard";

export default function PopularCars() {
  // Grab a slice of 9 cars for the landing grid
  const homeCars = carData.slice(0, 9);

  return (
    <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-2xl font-bold text-ink mb-8">
        Our most popular cars
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {homeCars.map((car) => (
          <VehicleCard key={car.id} {...car} />
        ))}
      </div>
    </section>
  );
}
