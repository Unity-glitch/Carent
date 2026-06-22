import { MapPin, Car, Wallet } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Availability",
    text: "Cars ready for pickup at multiple locations, any day of the week.",
  },
  {
    icon: Car,
    title: "Comfort",
    text: "A well-maintained fleet that keeps every trip smooth and enjoyable.",
  },
  {
    icon: Wallet,
    title: "Savings",
    text: "Transparent daily rates with no hidden fees or surprise charges.",
  },
];

const steps = [
  {
    title: "Choose your car",
    text: "Browse the fleet and pick the model that fits your trip and budget.",
  },
  {
    title: "Pick your dates",
    text: "Select rental and return dates that work for your schedule.",
  },
  {
    title: "Confirm your booking",
    text: "Review the details and lock in your reservation in minutes.",
  },
  {
    title: "Hit the road",
    text: "Collect your keys and enjoy a smooth, worry-free drive.",
  },
];

export default function Features() {
  return (
    <section className="px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-3 gap-10 text-center mb-20">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex flex-col items-center">
            <Icon className="text-ink mb-4" size={32} strokeWidth={1.5} />
            <h3 className="font-semibold text-ink mb-2">{title}</h3>
            <p className="text-sm text-muted max-w-xs">{text}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1761014586544-53fe5e1f1e25?auto=format&fit=crop&w=800&q=80"
          alt="Handing over car keys"
          className="rounded-2xl w-full h-80 object-cover"
        />
        <div className="flex flex-col gap-7">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h4 className="font-semibold text-ink mb-1">{step.title}</h4>
                <p className="text-sm text-muted">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
