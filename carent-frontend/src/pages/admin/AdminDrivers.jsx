import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

export default function AdminDrivers() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchDrivers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/drivers`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Unable to load drivers.");
      const data = await res.json();
      setDrivers(data.drivers || []);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Could not load drivers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrivers();
  }, []);

  const handleCreateDriver = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("Please provide name, email and password.");
    }

    setCreating(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/drivers`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to create driver.");

      toast.success(data.message || "Driver created.");
      setName("");
      setEmail("");
      setPassword("");
      fetchDrivers();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Unable to create driver.");
    } finally {
      setCreating(false);
    }
  };

  const updateDriverStatus = async (driverId, newStatus) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/drivers/${driverId}`, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ driverStatus: newStatus }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Unable to update status.");

      toast.success(data.message || "Status updated.");
      fetchDrivers();
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Unable to update driver status.");
    }
  };

  return (
    <div className="space-y-8">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />

      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <p className="text-sm text-muted">Driver management</p>
        <h2 className="mt-4 text-2xl font-bold text-ink">Drivers</h2>
        <p className="mt-2 text-sm text-muted">
          Create, review, and manage drivers for the application.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-ink">Add new driver</h3>
          <form className="mt-6 space-y-5" onSubmit={handleCreateDriver}>
            <label className="block text-sm font-medium text-ink">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-2xl border border-border bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Driver name"
            />

            <label className="block text-sm font-medium text-ink">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-border bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="driver@example.com"
            />

            <label className="block text-sm font-medium text-ink">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-border bg-gray-50 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Secure password"
            />

            <button
              type="submit"
              disabled={creating}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:opacity-60"
            >
              {creating ? "Creating driver..." : "Create driver"}
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-ink">Driver stats</h3>
          <div className="mt-6 space-y-4">
            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-sm text-muted">Total drivers</p>
              <p className="mt-2 text-3xl font-bold text-ink">
                {drivers.length}
              </p>
            </div>
            <div className="rounded-3xl bg-gray-50 p-4">
              <p className="text-sm text-muted">Pending drivers</p>
              <p className="mt-2 text-3xl font-bold text-ink">
                {
                  drivers.filter((driver) => driver.driverStatus === "pending")
                    .length
                }
              </p>
            </div>
          </div>
        </section>
      </div>

      {loading ? (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center text-sm text-muted">
          Loading drivers…
        </div>
      ) : drivers.length === 0 ? (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center text-sm text-muted">
          No drivers found.
        </div>
      ) : (
        <div className="grid gap-4">
          {drivers.map((driver) => (
            <div
              key={driver._id}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm text-muted">Driver</p>
                  <p className="mt-2 text-lg font-semibold text-ink">
                    {driver.name || driver.email}
                  </p>
                  <p className="text-sm text-muted">{driver.email}</p>
                </div>
                <div className="space-y-2 text-right">
                  <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-ink">
                    {driver.driverStatus || "pending"}
                  </span>
                  <p className="text-xs text-muted">
                    Created at {new Date(driver.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {driver.driverStatus !== "approved" && (
                  <button
                    className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-dark"
                    onClick={() => updateDriverStatus(driver._id, "approved")}
                  >
                    Approve
                  </button>
                )}
                {driver.driverStatus !== "blocked" && (
                  <button
                    className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                    onClick={() => updateDriverStatus(driver._id, "blocked")}
                  >
                    Block
                  </button>
                )}
                {driver.driverStatus === "blocked" && (
                  <button
                    className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-100"
                    onClick={() => updateDriverStatus(driver._id, "approved")}
                  >
                    Reinstate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
