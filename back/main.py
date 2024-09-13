from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from steam_api_work import take_info, play_game

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

@app.get("/")
async def get_info():
    return await take_info()

@app.get("/game")
async def get_game():
    return await play_game()

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)