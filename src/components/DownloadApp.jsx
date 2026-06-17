import { Apple, PlayCircle } from "lucide-react";
import appStoreImage from "../assets/app-play-store.svg";
import googlePlayImage from "../assets/google-play-store.svg";

export default function DownloadApp() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 text-center sm:text-left">
          Download mobile app
        </h2>
        <p className="text-muted max-w-md mb-8 text-center sm:text-left">
          Book, manage, and track your rental from your phone. Get the app and
          take Car Rental wherever you go.
        </p>
        <div className="flex gap-2 justify-center sm:justify-start">
          <img
            className="w-30 cursor-pointer"
            src={appStoreImage}
            alt="App Store"
          />
          <img
            className="w-30 cursor-pointer"
            src={googlePlayImage}
            alt="Google Play"
          />
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`w-40 h-80 rounded-[2.5rem] border-[6px] border-ink bg-white relative ${
              i === 1 ? "mt-8" : ""
            }`}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-ink rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
