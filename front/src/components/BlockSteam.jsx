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
          <div className='sticky top-0 flex justify-between items-center content-between px-[10px] gap-[127px] m-auto h-[15px] desktop:pl-[140px] desktop:h-[74px] desktop:content-center desktop:items-center desktop:justify-center desktop:gap-[101px] text-white' style={colorprofile}>
              <a onClick={ChangeTheme} className='desktop:hidden'><img className='w-[12px] h-[12px]'src='./img/sidenav/switch.png'/></a>

              <a onClick={Switch} className='phone:hidden'><img className='hover:animate-spin 'src='./img/blocksteam/switch_nav.png'/></a>

              <img className='phone:hidden' src='./img/blocksteam/name.png'></img>
              <p className='phone:hidden'>Имя</p>
              <img className='phone:hidden' src='./img/blocksteam/game.png'></img>
              <p className='phone:hidden'>{gamenow}</p>
              <img className="rounded-full w-[15px] h-[15] ring-[0.5px] desktop:w-[64px] desktop:h-[64px] ring-darkgreen" src="https://avatars.steamstatic.com/30854a44504e7c7a0a8f3d36954c94346ee084fc_full.jpg"/>
              <img className='phone:hidden' src='./img/blocksteam/lang.png'></img>
              <p className='phone:hidden '>Любимый язык</p>
              <img className='phone:hidden' src='./img/blocksteam/favortielang.png'></img>
              <p className='phone:hidden'>Кодил в последнее время</p>
              <a onClick={Switch} className='desktop:hidden'><img className='w-[9px] h-[9px] hover:animate-spin 'src='./img/blocksteam/switch_nav.png'/></a>
        </div>

        <div className={shownavbar ? 'block ' : 'hidden'}>
          <div className='desktop:hidden flex flex-col flex-wrap justify-between items-center content-center px-2 py-[3px] gap-[6px] m-auto bg-darkgreen text-[7px] text-white'>
                <a className='hover:animate-pulse' href='#'>ГЛАВНАЯ</a>
                <a className='hover:animate-pulse' href='#'>РАБОТА</a>
                <a className='hover:animate-pulse' href='#'>О МНЕ</a>
                <a className='hover:animate-pulse' href='#'>ТВОРЧЕСТВО</a>
          </div>
        </div>
       </>
    )
}