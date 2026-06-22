import Hero from "../components/Hero";
import Features from "../components/Features";
import PopularCars from "../components/PopularCars";
import SearchBanner from "../components/SearchBanner";
import Stats from "../components/Stats";
import DownloadApp from "../components/DownloadApp";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <PopularCars />
      <SearchBanner />
      <Stats />
      <DownloadApp />
    </div>
  );
}
