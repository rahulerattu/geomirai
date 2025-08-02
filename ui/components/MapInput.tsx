import { useState } from 'react';

export function MapInput({ onSelect }: { onSelect: (loc: { lat: number; lon: number }) => void }) {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [zip, setZip] = useState('');

  // Simulate ZIP lookup
  async function handleZipLookup() {
    // Replace with API lookup
    if (zip.length === 6) {
      onSelect({ lat: 28.6139, lon: 77.2090 }); // e.g., Delhi
    }
  }

  return (
    <div className="bg-white/5 p-6 rounded-xl flex flex-col md:flex-row gap-4 items-center shadow-lg animate-fadein border border-blue-600/20">
      <div className="flex flex-col gap-2">
        <label className="text-gray-300 text-sm">Latitude</label>
        <input
          type="number"
          className="bg-white/10 border border-blue-400/40 rounded px-3 py-2 text-lg text-white"
          value={lat}
          onChange={e => setLat(e.target.value)}
          placeholder="28.6139"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-300 text-sm">Longitude</label>
        <input
          type="number"
          className="bg-white/10 border border-blue-400/40 rounded px-3 py-2 text-lg text-white"
          value={lon}
          onChange={e => setLon(e.target.value)}
          placeholder="77.2090"
        />
      </div>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
        onClick={() => onSelect({ lat: Number(lat), lon: Number(lon) })}
      >
        Pin Location
      </button>
      <span className="text-gray-300 mx-3">or</span>
      <div className="flex flex-col gap-2">
        <label className="text-gray-300 text-sm">Postal Code</label>
        <input
          type="text"
          className="bg-white/10 border border-blue-400/40 rounded px-3 py-2 text-lg text-white"
          value={zip}
          onChange={e => setZip(e.target.value)}
          placeholder="110001"
        />
      </div>
      <button
        className="bg-emerald-600 text-white px-6 py-2 rounded shadow hover:bg-emerald-700 transition"
        onClick={handleZipLookup}
      >
        Lookup
      </button>
    </div>
  );
}