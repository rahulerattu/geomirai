from fastapi import FastAPI

from routes import health

app = FastAPI(
    title="GeoMirai API",
    description="End-to-End Crop-Suitability & Profitability Platform"
)

app.include_router(health.router)

@app.get("/")
def root():
    return {"message": "Welcome to GeoMirai API"}