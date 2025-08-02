from sqlalchemy import Column, Integer, String, Float, Date, MetaData
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class ConstantAvg(Base):
    __tablename__ = "constant_avg"
    id = Column(Integer, primary_key=True, index=True)
    clay_pct = Column(Float)
    ph = Column(Float)
    cec = Column(Float)
    # Add other soil parameters as needed

class MeteoRawDaily(Base):
    __tablename__ = "meteo_raw_daily"
    id = Column(Integer, primary_key=True, index=True)
    lat = Column(Float)
    lon = Column(Float)
    date = Column(Date)
    temp = Column(Float)
    rainfall = Column(Float)
    # Add other weather parameters as needed