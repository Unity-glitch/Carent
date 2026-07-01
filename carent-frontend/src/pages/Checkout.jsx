import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { carData } from "../data/cars";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

function calculateDays(startDate, endDate) {
  if (!startDate || !endDate) return 1;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));
  return diff;
}

export default function Checkout() {
  const { id } = useParams();
  const activeCar = carData.find((car) => car.id === id);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const days = useMemo(() => calculateDays(pickup, dropoff), [pickup, dropoff]);

  if (!activeCar) {
    return (
      <div className="bg-white min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-ink mb-4">Car not found</h1>
          <p className="text-muted mb-8">
            The car you selected could not be found. Please return to the fleet
            and choose another vehicle.
          </p>
          <Link
            to="/vehicles"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition"
          >
            Browse vehicles
          </Link>
        </div>
      </div>
    );
  }

  const total = activeCar.price * days;

  const handleStartPayment = async () => {
    if (!pickupLocation || !dropoffLocation || !pickup || !dropoff) {
      toast.error(
        "Please complete pickup, dropoff, and dates before checkout.",
      );
      return;
    }

    setIsProcessing(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/payments/initialize`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          carId: activeCar.id,
          carName: activeCar.name,
          pricePerDay: activeCar.price,
          pickupLocation,
          dropoffLocation,
          pickupDate: pickup,
          dropoffDate: dropoff,
          days,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to start payment.");
      }

      toast.success("Redirecting to Paystack for payment...");
      window.location.href = data.authorization_url;
    } catch (error) {
      console.error(error);
      toast.error(
        error.message || "Unable to start payment. Please try again.",
      );
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-12">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        toastClassName="!bg-[#131929] !border !border-indigo-900/60 !text-white"
      />
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_0.85fr] items-stretch">
        <div className="space-y-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-muted mb-2">
              Booking checkout
            </p>
            <h1 className="text-3xl font-bold text-ink">
              Confirm your rental and pay securely
            </h1>
            <p className="text-muted max-w-2xl mt-3">
              Review your vehicle, rental dates and total before proceeding to
              Paystack payment.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-gray-50 p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-ink">
                  Pickup location
                </label>
                <input
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="City or branch"
                  className="w-full h-11 rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-text"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-ink">
                  Dropoff location
                </label>
                <input
                  value={dropoffLocation}
                  onChange={(e) => setDropoffLocation(e.target.value)}
                  placeholder="City or branch"
                  className="w-full h-11 rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-text"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-ink">
                  Pickup date
                </label>
                <input
                  type="date"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-ink">
                  Return date
                </label>
                <input
                  type="date"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-white p-6 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] items-center">
              <div>
                <h2 className="text-lg font-bold text-ink">Selected vehicle</h2>
                <p className="text-sm text-muted mt-1">
                  {activeCar.name} — {activeCar.type}
                </p>
              </div>
              <div className="rounded-2xl bg-gray-100 px-4 py-3 text-sm font-semibold text-ink text-center">
                {days} day{days !== 1 ? "s" : ""} rental
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_0.85fr]">
              <div className="rounded-2xl bg-gray-50 p-4 flex flex-col gap-2">
                <p className="text-sm text-muted">Daily rate</p>
                <p className="text-xl font-bold text-ink">${activeCar.price}</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 flex flex-col gap-2">
                <p className="text-sm text-muted">Total cost</p>
                <p className="text-xl font-bold text-ink">${total}</p>
              </div>
            </div>

            <div className="mt-6">
              <button
                disabled={isProcessing}
                onClick={handleStartPayment}
                className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isProcessing ? "Processing payment..." : "Pay with Paystack"}
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-6 h-full">
          <div className="rounded-3xl border border-border bg-white shadow-sm h-full overflow-hidden flex flex-col">
            <div className="relative h-80 w-full overflow-hidden">
              <img
                src={activeCar.image}
                alt={activeCar.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-sm text-white/80">Order summary</p>
                <h2 className="text-xl font-bold text-white mt-1">
                  {activeCar.name}
                </h2>
                <p className="text-sm text-white/80 mt-1">{activeCar.type}</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-50 p-6 flex flex-col gap-6">
              <div className="rounded-2xl bg-white p-4 text-sm text-muted flex-1">
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span>Pickup branch</span>
                  <span>{pickupLocation || "Not selected"}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span>Return branch</span>
                  <span>{dropoffLocation || "Not selected"}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-border">
                  <span>Pickup date</span>
                  <span>{pickup || "Not selected"}</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Return date</span>
                  <span>{dropoff || "Not selected"}</span>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-ink mb-3">
                  Why pay with Paystack?
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li>Fast, secure online payment.</li>
                  <li>Card and bank transfer support.</li>
                  <li>Instant booking confirmation.</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
