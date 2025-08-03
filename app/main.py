from fastapi import FastAPI
from .routes import report, weather, soil, price_forecast, labs, health

app = FastAPI(
    title="GeoMirai API",
    version="0.1.0",
    description="End-to-End Crop-Suitability & Profitability Platform"
)

# Health check route
app.include_router(health.router)

# Core API routes
app.include_router(report.router)
app.include_router(weather.router)
app.include_router(soil.router)
app.include_router(price_forecast.router)
app.include_router(labs.router)

# Root endpoint
@app.get("/")
def root():
    return {"message": "Welcome to GeoMirai API"}




