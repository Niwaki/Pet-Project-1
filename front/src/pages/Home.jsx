import BlockSteam from "../components/BlockSteam"
import SideNav from "../components/SideNav"
import Footer from "../components/Footer"

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
    const [news, setNews] = useState({});
  
    const news_chech = () => {
      axios.get('http://127.0.0.1:8000/news')
        .then(response => {
            setNews(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    useEffect(() => {
    const interval = setInterval(() => {
        news_chech();
    }, 5000);
    
    return () => clearInterval(interval);

    }, []);

    console.log(news);
    function addDivNews() {
        return console.log("add panel");
    }


    return (
        <>

        <BlockSteam/>
        <SideNav/>

        <div className="flex items-center h-screen content-center justify-center text-white bg-darkgreen mx-auto desktop:pl-[296px] gap-[23px] py-[156px] flex-wrap">

            {Object.keys(news).map((key) => {
                return (
                    <button key={key} id='panesnews' url={news[key].url} className={`flex flex-wrap items-start content-start px-[13px] py-[10px] gap-[79px] w-[493px] h-[264px] border-solid border-2 border-white bg-[url('${news[key].image}')] bg-center bg-cover hover:animate-pulse`}>
                        <p>{news[key].title}</p>
                        <p>{news[key].text}</p>
                    </button>
                );
            })} 


            <button className="flex content-center justify-center items-center p-[10px] gap-[10px] w-[493px] h-[264px] rounded-full border-solid border-2 border-white hover:animate-pulse text-[40px]" onClick={addDivNews}>
                <p>+</p>
            </button>
        </div>

        <Footer/>
        </>
    )
}
