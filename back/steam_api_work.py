from env_variables import API_KEY
from aiohttp import ClientSession

class WORK_API_STEAM_USER:
    def __init__(self, steamid):
        self.API_KEY = API_KEY

        self.steamid = steamid

    async def get_player_summaries(self):
        async with ClientSession() as session:
            async with session.get(rf'https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={self.API_KEY}&steamids={self.steamid}' ) as response:
                response.raise_for_status()
                return await response.json()
            
key = WORK_API_STEAM_USER(76561198356430075)

async def get_currency_play_game(jtbl):
    if 'gameextrainfo' in jtbl["response"]["players"][0]:
        return [{"in_game": jtbl["response"]["players"][0]["gameextrainfo"]}]
    else:
        return [{"in_game": "В сети"}]
    

async def take_info(): return await key.get_player_summaries()
async def play_game(): return await get_currency_play_game(await take_info())
