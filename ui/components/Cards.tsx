import { Bar } from 'react-chartjs-2';

export function SalinityBadge({ value }: { value: number }) {
  const labels = ['Low', 'Medium', 'High'];
  return (
    <div className={`rounded-xl p-4 flex flex-col items-center shadow-lg bg-gradient-to-r from-blue-600 to-emerald-600 animate-bounce`}>
      <span className="text-lg font-bold text-white">Salinity Risk</span>
      <span className="mt-2 text-3xl font-extrabold text-yellow-200">
        {labels[value] || 'Unknown'}
      </span>
      <div className="mt-1 text-xs text-gray-200">FAO Class: {value}</div>
    </div>
  );
}

export function RiskBadge({ risk }: { risk: string }) {
  const color = risk === 'High' ? 'bg-red-600' : risk === 'Medium' ? 'bg-yellow-600' : 'bg-emerald-600';
  return (
    <div className={`rounded-xl p-4 flex flex-col items-center shadow-lg ${color} text-white animate-pulse`}>
      <span className="text-lg font-bold">Overall Risk</span>
      <span className="mt-2 text-3xl font-extrabold">{risk}</span>
    </div>
  );
}

export function CropCard({ crop, yield: yld, price, npv, climateFactor, market }: any) {
  return (
    <div className="rounded-xl p-5 bg-gradient-to-br from-emerald-600 to-blue-700 shadow-xl animate-fadein">
      <div className="flex items-center gap-3">
        <img src={`/crops/${crop?.toLowerCase()}.png`} className="w-10 h-10 rounded-full border-2 border-white" alt={crop} />
        <span className="text-2xl font-bold text-white">{crop}</span>
      </div>
      <div className="mt-3 flex flex-col gap-2 text-white/90">
        <span>Yield: <span className="font-bold">{yld} t/ha</span></span>
        <span>Price: <span className="font-bold">₹{price}/qtl</span></span>
        <span>NPV: <span className="font-bold">₹{npv}/ha</span></span>
        <span>Climate Factor: <span className="font-bold">{climateFactor}</span></span>
        <span>Market: <span className="font-bold">{market}</span></span>
      </div>
    </div>
  );
}

export function PriceChart({ crop, priceTrend }: { crop: string; priceTrend: number[] }) {
  // Simple bar chart, replace with Chart.js/any
  return (
    <div className="rounded-xl p-4 bg-gradient-to-br from-blue-800 to-emerald-800 shadow-lg flex flex-col items-center animate-fadein">
      <span className="text-lg font-bold text-white">{crop} Price Forecast</span>
      <svg className="mt-4" width="180" height="80">
        {priceTrend.map((v, i) => (
          <rect key={i} x={i * 30 + 10} y={80 - v / 25} width="20" height={v / 25} fill="#34d399" rx="3" />
        ))}
      </svg>
      <div className="mt-2 text-xs text-gray-300">9-month outlook (₹/qtl)</div>
    </div>
  );
}

export function CircularEconomyCard({ crop, wasteVolume }: { crop: string; wasteVolume: number }) {
  return (
    <div className="rounded-xl p-4 bg-gradient-to-br from-yellow-700 to-green-700 shadow-lg flex flex-col items-center animate-fadein">
      <span className="text-lg font-bold text-white">Circular Economy</span>
      <span className="mt-2 text-2xl font-extrabold text-yellow-200">{wasteVolume} t/ha</span>
      <div className="mt-1 text-xs text-gray-200">{crop} straw/husk, est. by GeoMirai</div>
    </div>
  );
}