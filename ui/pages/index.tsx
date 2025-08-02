import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SalinityBadge, RiskBadge, CropCard, PriceChart, CircularEconomyCard } from '../components/Cards';
import { MapInput } from '../components/MapInput';
import { SatelliteHero } from '../components/SatelliteHero';

export default function Home() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);

  // Simulate crop prediction, climate, price
  const cropPrediction = {
    crop: 'Rice',
    yield: 5.2,
    price: 1900,
    npv: 62000,
    risk: 'Medium',
    salinity: 2,
    climateFactor: 1.1,
    market: 'Agmarknet',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-emerald-900 to-gray-950 flex flex-col font-sans">
      <SatelliteHero />
      <main className="relative z-10 px-4 md:px-12 pt-12 pb-24 max-w-6xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-fadein">GeoMirai: Crop Suitability & Profitability</h2>
          <p className="text-lg md:text-2xl text-emerald-100 mb-6 animate-slideup">
            AI-powered predictions for yield, price, and climate risk. Input your farm, get instant recommendations!
          </p>
          <MapInput onSelect={setLocation} />
        </section>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <CropCard {...cropPrediction} />
          <div className="flex flex-col gap-4">
            <SalinityBadge value={cropPrediction.salinity} />
            <RiskBadge risk={cropPrediction.risk} />
            <CircularEconomyCard crop="Rice" wasteVolume={2.1} />
          </div>
          <PriceChart crop="Rice" priceTrend={[1800, 1850, 1900, 2000, 1950, 2100]} />
        </div>
        <div className="mt-16 text-center">
          <span className="text-gray-400">🌏 MVP: India, Vietnam, Cambodia · 30 crops · Satellite data · Climate-smart farming</span>
        </div>
      </main>
    </div>
  );
}