from sqlalchemy import Column, Integer, Float, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ConstantAvg(Base):
    __tablename__ = "constant_avg"
    id = Column(Integer, primary_key=True, index=True)
    crop = Column(String)
    clay_pct = Column(Float)
    ph = Column(Float)
    cec = Column(Float)
    # Add other fields as needed

class MeteoRawDaily(Base):
    __tablename__ = "meteo_raw_daily"
    id = Column(Integer, primary_key=True, index=True)
    latitude = Column(Float)
    longitude = Column(Float)
    date = Column(String)
    rainfall = Column(Float)
    temperature = Column(Float)
    # Add other fields as needed