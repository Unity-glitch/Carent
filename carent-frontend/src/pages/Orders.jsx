import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

const mockOrders = [
  {
    id: "ORD-001",
    car: "Mercedes-Benz C-Class",
    status: "Payment confirmed",
    progress: 80,
    pickup: "New York Downtown",
    dropoff: "New York Airport",
    total: 325,
    days: 5,
  },
  {
    id: "ORD-002",
    car: "Porsche Cayenne Coupe",
    status: "Ready for pickup",
    progress: 60,
    pickup: "Los Angeles Central",
    dropoff: "Los Angeles Airport",
    total: 600,
    days: 5,
  },
  {
    id: "ORD-003",
    car: "Toyota Camry Hybrid",
    status: "Completed",
    progress: 100,
    pickup: "Chicago Loop",
    dropoff: "Chicago O'Hare",
    total: 135,
    days: 3,
  },
];

const getStatusTone = (status) => {
  if (status === "Completed") return "text-emerald-600 bg-emerald-50";
  if (status === "Ready for pickup") return "text-blue-600 bg-blue-50";
  return "text-amber-700 bg-amber-50";
};

export default function OrdersPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [orders, setOrders] = useState(mockOrders);
  const [statusMessage, setStatusMessage] = useState("");
  const upcoming = useMemo(
    () => orders.filter((order) => order.progress < 100),
    [orders],
  );

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        credentials: "include",
      });
      if (!response.ok) throw new Error("Unable to load orders.");
      const data = await response.json();
      setOrders(
        data.orders.map((order) => ({
          ...order,
          id: order._id || order.id,
          car: order.carName || order.car || "Unknown vehicle",
          pickup: order.pickupLocation || order.pickup || "Not selected",
          dropoff: order.dropoffLocation || order.dropoff || "Not selected",
          total: order.totalCost || order.total || 0,
          progress:
            order.status === "Completed"
              ? 100
              : order.status === "Ready for pickup"
                ? 70
                : order.status === "Payment confirmed"
                  ? 50
                  : order.status === "Pending payment"
                    ? 20
                    : 0,
        })),
      );
    } catch (error) {
      console.error(error);
      setStatusMessage(
        "Unable to load order history. Please sign in or try again.",
      );
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const reference = query.get("reference");

    const verifyPayment = async () => {
      if (!reference) return;

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/payments/verify?reference=${encodeURIComponent(reference)}`,
        );
        const data = await response.json();
        if (!response.ok)
          throw new Error(data.message || "Payment verification failed.");
        setStatusMessage(
          "Payment verified. Your order status has been updated.",
        );
      } catch (error) {
        console.error(error);
        setStatusMessage(error.message || "Payment verification failed.");
      } finally {
        query.delete("reference");
        const search = query.toString();
        navigate({ pathname: location.pathname, search }, { replace: true });
        fetchOrders();
      }
    };

    verifyPayment();
    if (!reference) fetchOrders();
  }, [location.search]);

  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted mb-2">
              Your bookings
            </p>
            <h1 className="text-3xl font-bold text-ink">
              Track every order in one place
            </h1>
            <p className="text-muted max-w-2xl mt-3">
              See payment status, pickup details and your rental history.
            </p>
          </div>
          <Link
            to="/vehicles"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary hover:text-primary"
          >
            Rent another car
          </Link>
        </div>

        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-3xl border border-border bg-gray-50 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm text-muted">Order ID</p>
                  <h2 className="text-xl font-bold text-ink">{order.id}</h2>
                </div>
                <div
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${getStatusTone(order.status)}`}
                >
                  {order.status}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-white p-4 border border-border">
                  <p className="text-sm text-muted">Vehicle</p>
                  <p className="mt-2 font-semibold text-ink">{order.car}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-border">
                  <p className="text-sm text-muted">Pickup</p>
                  <p className="mt-2 font-semibold text-ink">{order.pickup}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-border">
                  <p className="text-sm text-muted">Dropoff</p>
                  <p className="mt-2 font-semibold text-ink">{order.dropoff}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 border border-border">
                  <p className="text-sm text-muted">Total</p>
                  <p className="mt-2 font-semibold text-ink">${order.total}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-ink">
                    Rental progress
                  </p>
                  <span className="text-sm text-muted">{order.progress}%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${order.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-ink mb-4">
            How order tracking works
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-gray-50 p-5">
              <h3 className="text-base font-semibold text-ink mb-2">1. Book</h3>
              <p className="text-sm text-muted">
                Reserve your vehicle, choose pickup/dropoff times, and pay
                securely with Paystack.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-5">
              <h3 className="text-base font-semibold text-ink mb-2">
                2. Confirm
              </h3>
              <p className="text-sm text-muted">
                After payment is processed, your order moves to Ready for pickup
                and you receive an email confirmation.
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-5">
              <h3 className="text-base font-semibold text-ink mb-2">
                3. Track
              </h3>
              <p className="text-sm text-muted">
                Track order status in real time: Payment confirmed, Ready for
                pickup, In use, or Completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
