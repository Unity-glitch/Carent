import { Settings2, Fuel, Snowflake } from "lucide-react";

export default function VehicleCard({
  id,
  name,
  type,
  price,
  image,
  transmission,
  fuel,
  ac,
}) {
  return (
    <div className="bg-white border border-border rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
      <div className="rounded-xl overflow-hidden h-40 mb-5 bg-gray-50">
        <img
          src={image}
          alt={`${name} ${type}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-ink text-lg">{name}</h3>
          <p className="text-sm text-muted">{type}</p>
        </div>
        <div className="text-right">
          <span className="text-primary font-bold text-lg">${price}</span>
          <p className="text-xs text-muted">per day</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-muted mb-5">
        <span className="flex items-center gap-1">
          <Settings2 size={14} /> {transmission}
        </span>
        <span className="flex items-center gap-1">
          <Fuel size={14} /> {fuel}
        </span>
        {ac && (
          <span className="flex items-center gap-1">
            <Snowflake size={14} /> A/C
          </span>
        )}
      </div>

      <button className="mt-auto bg-primary hover:bg-primary-dark text-white font-medium rounded-full py-3 transition-colors">
        View Details
      </button>
    </div>
  );
}
