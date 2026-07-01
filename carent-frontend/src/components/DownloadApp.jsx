import appStoreImage from "../assets/app-play-store.svg";
import googlePlayImage from "../assets/google-play-store.svg";
import carVideo1 from "../assets/car-loop-3.mp4";
import carVideo2 from "../assets/car-loop-2.mp4";

export default function DownloadApp() {
  const carVideos = [carVideo1, carVideo2];

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto py-16 grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-muted mb-3">
          Mobile convenience
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
          Manage rentals from anywhere.
        </h2>
        <p className="text-muted max-w-md mb-8">
          Book, update and track your rental using the app. Everything you need
          for a smooth pickup is in the palm of your hand.
        </p>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          <img
            className="w-32 cursor-pointer"
            src={appStoreImage}
            alt="Download on the App Store"
          />
          <img
            className="w-32 cursor-pointer"
            src={googlePlayImage}
            alt="Get it on Google Play"
          />
        </div>
      </div>

      <div className="flex justify-center gap-4">
        {[0, 1].map((i) => (
          <div
            key={i}
            className={`w-44 h-[22rem] rounded-[2.5rem] border-[6px] border-black bg-black relative overflow-hidden shadow-xl ${
              i === 1 ? "mt-8" : ""
            }`}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20" />

            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={carVideos[i]}
              autoPlay
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
