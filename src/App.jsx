import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrandCarousel from "./components/BrandCarousel";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Details from "./pages/Details";
import About from "./pages/About";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <BrandCarousel />
      <Footer />
    </div>
  );
}
