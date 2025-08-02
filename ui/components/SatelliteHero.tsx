export function SatelliteHero() {
  return (
    <div className="relative w-full h-[320px] md:h-[420px] overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-90 blur-[2px]"
        src="/satellite.mp4"
        poster="/satellite.jpg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-fadein">
          <span className="text-emerald-400">GeoMirai</span> <span className="text-blue-300">Platform</span>
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 animate-slideup">
          Satellite-powered Crop Insights · Predict. Optimize. Thrive.
        </p>
      </div>
    </div>
  );
}