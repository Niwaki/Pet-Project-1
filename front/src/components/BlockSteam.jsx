import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BlockSteam() {
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

    function Switch() {
      return console.log("switch")
    }

    return (

      <header className="flex justify-center text-white sticky top-0 ml-36" style={colorprofile}>
        <div className='flex'>
            <ul className='flex gap-20 items-center'>
                <li className='flex items-center gap-7'><img src='./img/blocksteam/switch_nav.png'/></li>
                <li className='flex items-center gap-7'><img src="./img/blocksteam/name.png"/><a>Искупался в родничке</a></li>
                <li className='flex items-center gap-7'><img src="./img/blocksteam/game.png"/><a>{gamenow}</a></li>
                <li className='flex items-center gap-7'><img className="rounded-full w-16 h-16" src="https://avatars.steamstatic.com/30854a44504e7c7a0a8f3d36954c94346ee084fc_full.jpg"/></li>
                <li className='flex items-center gap-7'><img src="./img/blocksteam/lang.png"/><a>Любимый язык</a></li>
                <li className='flex items-center gap-7'> <img src="./img/blocksteam/favortielang.png"/><a>На чем в прошлый раз кодил</a></li>
            </ul>
        </div>
      </header>
    )
}

{/* <header className="hiden sm:flex justify-center text-white sticky top-0 ml-36 sm:w-screen sm:ml-0 sm:h-8" style={colorprofile}>
<div className='flex sm:font-thin'>
    <ul className='flex gap-20 items-center sm:text-xs sm:flex-wrap sm:gap-12'>
        <li className='flex items-center gap-7'><img src='./img/blocksteam/switch_nav.png'/></li>
        <li className='flex items-center gap-7 sm:collapse'><img src="./img/blocksteam/name.png"/><a>Искупался в родничке</a></li>
        <li className='flex items-center gap-7'><img src="./img/blocksteam/game.png"/><a>{gamenow}</a></li>
        <li className='flex items-center gap-7'><img className="rounded-full w-16 h-16 sm:w-8 sm:h-8" src="https://avatars.steamstatic.com/30854a44504e7c7a0a8f3d36954c94346ee084fc_full.jpg"/></li>
        <li className='flex items-center gap-7 sm:collapse'><img src="./img/blocksteam/lang.png"/><a>Любимый язык</a></li>
        <li className='flex items-center gap-7 sm:collapse'> <img src="./img/blocksteam/favortielang.png"/><a>На чем в прошлый раз кодил</a></li>
    </ul>
</div> */}