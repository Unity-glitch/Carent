import { Car, Search } from "lucide-react";

export default function SearchBanner() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto">
      <div className="relative overflow-hidden bg-primary rounded-3xl px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <Car
          className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 text-white/10"
          size={220}
          strokeWidth={1}
        />

        <div className="relative z-10 max-w-md">
          <h2 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-3">
            Enjoy every mile with adorable companionship.
          </h2>
          <p className="text-white/75 text-sm">
            Tell us where you&apos;re headed and we&apos;ll line up a car
            that&apos;s ready when you are.
          </p>
        </div>

        <div className="flex w-full md:w-auto bg-white rounded-full shadow-lg max-w-md h-12 overflow-hidden">
          <input
            className="flex-1 px-4 text-sm bg-transparent focus:outline-none"
            placeholder="City"
          />

          <button className="bg-accent hover:bg-accent-dark text-white px-4 flex items-center gap-2">
            <Search size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
