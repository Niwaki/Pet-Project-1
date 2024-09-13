import os
from dotenv import load_dotenv, dotenv_values 

load_dotenv()

API_KEY = os.getenv("MY_API_KEY_STEAM")