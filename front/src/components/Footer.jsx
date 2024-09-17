import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Footer() {
    const [game, setGame] = useState(null);
  
    const game_play = () => {
      axios.get('http://127.0.0.1:8000/game')
        .then(response => {
          setGame(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        game_play();
      }, 1000);
      
      return () => clearInterval(interval);
    }, []);
    
    var colorprofile = {};
    var gamenow = undefined;

    if (game && game.length > 0) {
      if (game[0].in_game == "В сети") {
        colorprofile = {
          background: "linear-gradient(90deg, #0C0E0C 0%, #534B4C 46.5%, #0C0E0C 99.99%, #0C0E0C 100%)",
        };
        gamenow = "Не играю";
      } else {
        colorprofile = {
          background: "linear-gradient(90deg, #0C0E0C 0%, #A72830 46.5%, #0C0E0C 99.99%, #0C0E0C 100%)",
        };
        gamenow = game[0].in_game;
      }
    }
    return (
      <>
        <div className='flex flex-row flex-wrap justify-center items-center content-center px-[0px] gap-x-[0px] gap-y-[127px] h-[15px] text-white text-[7px]' style={colorprofile}>
          Сайт сделан как что-то творечское, можно сказать как визитка ничего серьезного
        </div>
      </>
    )
}
