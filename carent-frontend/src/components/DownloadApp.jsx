import appStoreImage from "../assets/app-play-store.svg";
import googlePlayImage from "../assets/google-play-store.svg";
import carVideo1 from "../assets/car-loop-3.mp4";
import carVideo2 from "../assets/car-loop-2.mp4";

export default function DownloadApp() {
  const carVideos = [carVideo1, carVideo2];

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
            className={`w-44 h-88 rounded-[2.5rem] border-[6px] border-black bg-black relative overflow-hidden shadow-xl ${
              i === 1 ? "mt-8" : ""
            }`}
          >
            {/* Phone Speaker/Camera Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20" />

            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={carVideos[i]}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Subtle glass overlay to simulate phone screen surface glass */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
