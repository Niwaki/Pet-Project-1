from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from steam_api_work import take_info, play_game
from pydantic import BaseModel
from sqltables import table

app = FastAPI()

origins = [
    "http://localhost:5173",  # No trailing slash
    "http://127.0.0.1:5173",  # No trailing slash
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow all origins for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class News(BaseModel):
    title: str
    text: str
    date: str
    url: str
    image: str

@app.get("/")
async def get_info():
    return await take_info()

@app.get("/game")
async def get_game():
    return await play_game()

@app.get('/news')
async def get_news():
    return table

@app.post('/news', response_model=News)
async def add_news(news: News):
    table.append({"title": news.title, "text": news.text, "date": news.date, "url": news.url, "image": news.image})
    return news


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)