from fastapi import FastAPI
from app.routes import health

app = FastAPI(
    title="Geomirai API",
    description="Crop suitability & economics endpoints",
    version="0.1.0"
)

app.include_router(health.router)

# Add more routers for /report/{field_id}, /suitability, etc.