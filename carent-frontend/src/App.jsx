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

import { Routes, Route, useLocation } from "react-router-dom";

const AUTH_ROUTES = ["/", "/signin", "/signup"];

export default function App() {
  const location = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isAuthPage && <Navbar />}

      <main className="grow">
        <Routes>
          {/* Auth / Onboarding — fullscreen, no shell */}
          <Route path="/" element={<Onboarding />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Main app pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {!isAuthPage && <BrandCarousel />}
      {!isAuthPage && <Footer />}
    </div>
  );
}
