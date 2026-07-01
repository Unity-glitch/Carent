import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

export default function AdminDashboard() {
  const [welcomeName, setWelcomeName] = useState("Admin");
  const [stats, setStats] = useState({ orders: 0, customers: 0, drivers: 0 });

  useEffect(() => {
    const userRaw = window.localStorage.getItem("carent_user");
    if (userRaw) {
      const user = JSON.parse(userRaw);
      setWelcomeName(user.name || "Admin");
    }

    const fetchStats = async () => {
      try {
        const [ordersRes, customersRes, driversRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/admin/orders`, { credentials: "include" }),
          fetch(`${API_BASE_URL}/api/admin/customers`, {
            credentials: "include",
          }),
          fetch(`${API_BASE_URL}/api/admin/drivers`, {
            credentials: "include",
          }),
        ]);

        if (!ordersRes.ok || !customersRes.ok || !driversRes.ok) {
          throw new Error("Unable to load admin dashboard.");
        }

        const [ordersData, customersData, driversData] = await Promise.all([
          ordersRes.json(),
          customersRes.json(),
          driversRes.json(),
        ]);

        setStats({
          orders: ordersData.orders.length,
          customers: customersData.customers.length,
          drivers: driversData.drivers.length,
        });
      } catch (error) {
        toast.error(error.message || "Unable to fetch dashboard stats.");
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-8">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted mb-2">
              Welcome back
            </p>
            <h1 className="text-3xl font-bold text-ink">
              Hello, {welcomeName}
            </h1>
            <p className="text-muted mt-2">
              Manage orders, drivers, and customers from the admin panel.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <p className="text-sm text-muted">Total orders</p>
          <h2 className="mt-4 text-4xl font-bold text-ink">{stats.orders}</h2>
        </div>
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <p className="text-sm text-muted">Active drivers</p>
          <h2 className="mt-4 text-4xl font-bold text-ink">{stats.drivers}</h2>
        </div>
        <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
          <p className="text-sm text-muted">Customers</p>
          <h2 className="mt-4 text-4xl font-bold text-ink">
            {stats.customers}
          </h2>
        </div>
      </div>
    </div>
  );
}
