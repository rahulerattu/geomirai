# Geomirai

## Quick-ref idea bullets

🌏 **Scope** — MVP covers India, Vietnam & Cambodia; 30 highest-acreage crops; English UI only (country selector pre-loads data).

📍 **Location input** — Map pin (lat/lon) or postal code fallback; accuracy badge (green = pin, amber = ZIP centroid).

🧂 **Salinity badge** — 0-3 FAO class + elevation + rainfall = Low / Medium / High risk in < 1 s.

🌾 **Yield engine** — Baseline FAO yield × climate factor × salinity penalty × nutrient gap (SoilGrids or user lab data).

💰 **Price forecast** — Prophet on Agmarknet / VNF1 / FAO-GIEWS; 9-month outlook feeds NPV calculator.

📊 **Cost-benefit table** — Compares all 30 crops: predicted yield, fertiliser cost, labour (user slider), by-product revenue, NPV/ha.

🪵 **Circular-economy marketplace** — Auto-estimates waste volume (straw, husk, peels, bagasse); 3 % commission on buyer side.

🛰 **Data backbone** — SRTM DEM, FAO salinity, ISRIC N-P-K, NASA POWER weather; stored as COGs on S3.

🛠 **Stack** — Streamlit front-end · FastAPI micro-services · Supabase PostGIS · nightly ETL via GitHub Actions.

🔔 **Push hooks** — Twilio WhatsApp alerts for “High” risk; email ticket for paid diagnostic survey (EM38 + water test), Location of soil testing facilities nearby

🔄 **Free baseline, paid layers** — core features free; revenue from ads on recommended inputs, marketplace fee, cluster surveys, premium imagery.

📈 **Road-map** — add Thailand, multi-language packs, XGBoost price ensemble, carbon-credit MRV for rice-straw biochar, Mushroom substrate from paddy straw , Biogas plant , Pallet making , Rice bran oil production, Simple value added products from the crops to supplement income


## Day-1 repository checklist

```
geomirai/
├─ infra/
│   ├─ docker-compose.yml
│   ├─ render.yaml
│   └─ .env.example
├─ app/            # FastAPI package
│   ├─ main.py
│   ├─ db.py
│   ├─ models.py
│   └─ routes/
├─ ui/             # Next.js web
│   ├─ pages/
│   ├─ components/
│   └─ tailwind.config.ts
├─ n8n/flows/      # exported workflow JSONs
└─ README.md       # (paste this brief)
```