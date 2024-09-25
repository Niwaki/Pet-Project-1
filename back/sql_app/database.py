from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()



''' 3 end points to do for front web 
CREATE TABLE IF NOT EXIST news (
    title STRING,
    text STRING,
    date STRING,
    url STRING,
    image STRING
);

INSERT INTO news(title, text, date, url, iamge) VALUEES(table);

SELECT * FROM news;
'''