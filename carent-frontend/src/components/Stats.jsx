import { Car, Users, Award, Gauge } from "lucide-react";

const stats = [
  { icon: Car, value: "540+", label: "Premium vehicles" },
  { icon: Users, value: "20k+", label: "Happy customers" },
  { icon: Award, value: "25+", label: "Years experience" },
  { icon: Gauge, value: "20m+", label: "Miles driven" },
];

export default function Stats() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-16">
      <div className="relative overflow-hidden bg-primary rounded-3xl px-8 py-14 text-center">
        <Car
          className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-0 text-white/10"
          size={320}
          strokeWidth={1}
        />

        <div className="relative z-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">
            Trusted and growing
          </p>
          <h2 className="text-white font-bold text-3xl mb-3">
            Professional service you can count on
          </h2>
          <p className="text-white/70 max-w-md mx-auto mb-10 text-sm">
            Reliable vehicle access, transparent pricing, and support that keeps
            you moving.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-5">
                <span className="inline-flex bg-accent text-white rounded-xl p-2.5 mb-3">
                  <Icon size={20} />
                </span>
                <p className="font-bold text-xl text-ink">{value}</p>
                <p className="text-xs text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
