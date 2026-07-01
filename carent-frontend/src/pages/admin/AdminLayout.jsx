import { Outlet, Link, useLocation } from "react-router-dom";

const adminLinks = [
  { label: "Dashboard", path: "/admin" },
  { label: "Orders", path: "/admin/orders" },
  { label: "Customers", path: "/admin/customers" },
  { label: "Drivers", path: "/admin/drivers" },
  { label: "Settings", path: "/admin/settings" },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#f8fafc] text-ink">
      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Admin panel
            </p>
            <h1 className="text-2xl font-bold">Carent Back Office</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            {adminLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-ink hover:bg-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 py-10 md:px-12">
        <Outlet />
      </main>
    </div>
  );
}
