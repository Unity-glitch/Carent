import { useEffect, useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/admin/orders`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Unable to load admin orders.");
        const data = await res.json();
        setOrders(data.orders || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <p className="text-sm text-muted">Order management</p>
        <h2 className="mt-4 text-2xl font-bold text-ink">Orders</h2>
        <p className="mt-2 text-sm text-muted">
          This area shows active orders, pending payments, and status controls.
        </p>
      </div>

      {loading ? (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center text-sm text-muted">
          Loading orders…
        </div>
      ) : orders.length === 0 ? (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center text-sm text-muted">
          No orders found.
        </div>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-muted">Order ID</p>
                  <p className="mt-1 text-lg font-semibold text-ink">
                    {order._id}
                  </p>
                </div>
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm text-ink">
                  {order.status}
                </span>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-muted">Vehicle</p>
                  <p className="mt-2 font-semibold text-ink">{order.carName}</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-muted">Pickup</p>
                  <p className="mt-2 font-semibold text-ink">
                    {order.pickupLocation}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-muted">Dropoff</p>
                  <p className="mt-2 font-semibold text-ink">
                    {order.dropoffLocation}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-muted">Total</p>
                  <p className="mt-2 font-semibold text-ink">
                    ${order.totalCost}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
