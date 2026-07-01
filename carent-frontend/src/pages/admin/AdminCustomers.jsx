import { useEffect, useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://carent-ymkk.onrender.com";

export default function AdminCustomers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/admin/customers`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Unable to load customers.");
        const data = await res.json();
        setCustomers(data.customers || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
        <p className="text-sm text-muted">Customer management</p>
        <h2 className="mt-4 text-2xl font-bold text-ink">Customers</h2>
        <p className="mt-2 text-sm text-muted">
          View and manage registered users here.
        </p>
      </div>

      {loading ? (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center text-sm text-muted">
          Loading customers…
        </div>
      ) : customers.length === 0 ? (
        <div className="rounded-3xl border border-border bg-white p-8 shadow-sm text-center text-sm text-muted">
          No customers found.
        </div>
      ) : (
        <div className="grid gap-4">
          {customers.map((customer) => (
            <div
              key={customer._id}
              className="rounded-3xl border border-border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-muted">Customer</p>
              <p className="mt-2 text-lg font-semibold text-ink">
                {customer.name || customer.email}
              </p>
              <p className="text-sm text-muted">{customer.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
