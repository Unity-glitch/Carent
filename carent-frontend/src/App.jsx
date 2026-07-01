import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrandCarousel from "./components/BrandCarousel";

import Home from "./pages/Home";
import Onboarding from "./onboarding/onbaording";
import Vehicles from "./pages/Vehicles";
import Details from "./pages/Details";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./onboarding/Signin";
import Signup from "./onboarding/Signup";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminCustomers from "./pages/admin/AdminCustomers";
import AdminDrivers from "./pages/admin/AdminDrivers";
import AdminSettings from "./pages/admin/AdminSettings";

import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/" ||
    location.pathname.startsWith("/signin") ||
    location.pathname.startsWith("/signup") ||
    location.pathname === "/admin/login" ||
    location.pathname === "/admin/signup";
  const isAdminPage =
    location.pathname.startsWith("/admin") &&
    !["/admin/login", "/admin/signup"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isAuthPage && !isAdminPage && <Navbar />}

      <main className="grow">
        <Routes>
          {/* Auth / Onboarding — fullscreen, no shell */}
          <Route path="/" element={<Onboarding />} />
          <Route path="/signin" element={<Signin moduleType="customer" />} />
          <Route
            path="/signin/driver"
            element={<Signin moduleType="driver" />}
          />
          <Route path="/signup" element={<Signup moduleType="customer" />} />
          <Route
            path="/signup/driver"
            element={<Signup moduleType="driver" />}
          />

          {/* Main app pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/customers" element={<AdminCustomers />} />
            <Route path="/admin/drivers" element={<AdminDrivers />} />
            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </main>

      {!isAuthPage && !isAdminPage && <BrandCarousel />}
      {!isAuthPage && !isAdminPage && <Footer />}
    </div>
  );
}
