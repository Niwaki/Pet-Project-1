import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BlockSteam() {
    const [game, setGame] = useState(null);
    const [shownavbar, setShownavbar] = useState(false);
    const [theme, setTheme] = useState('dark');
  
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
      setShownavbar(!shownavbar);
    }

    function ChangeTheme() {
      return console.log(theme);
    }

    return (
        <>
          <div className='flex flex-wrap justify-between items-center content-between px-[10px] gap-[127px] m-auto h-[15px]' style={colorprofile}>
              <a onClick={ChangeTheme}><img className='w-[16px] h-[9px]'src='./img/sidenav/switch.png'/></a>
              
              <img className="rounded-full w-[15px] h-[15] ring-[0.5px] ring-darkgreen" src="https://avatars.steamstatic.com/30854a44504e7c7a0a8f3d36954c94346ee084fc_full.jpg"/>

              <a onClick={Switch}><img className='w-[9px] h-[9px] hover:animate-spin 'src='./img/blocksteam/switch_nav.png'/></a>
        </div>

        <div className={shownavbar ? 'block ' : 'hidden'}>
          <div className='flex flex-col flex-wrap justify-between items-center content-center px-2 py-[3px] gap-[6px] m-auto bg-darkgreen text-[7px] text-white'>
                <a className='hover:animate-pulse' href='#'>ГЛАВНАЯ</a>
                <a className='hover:animate-pulse' href='#'>РАБОТА</a>
                <a className='hover:animate-pulse' href='#'>О МНЕ</a>
                <a className='hover:animate-pulse' href='#'>ТВОРЧЕСТВО</a>
          </div>
        </div>
       </>
    )
}

