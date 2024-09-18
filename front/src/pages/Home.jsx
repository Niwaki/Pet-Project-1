import BlockSteam from "../components/BlockSteam"
import SideNav from "../components/SideNav"
import Footer from "../components/Footer"

export default function Home() {

    function addDivNews() {
        return console.log("add panel");
    }
    return (
        <>

        <BlockSteam/>
        <SideNav/>
        {/*  w-full h-screen to-do */}
        <div className="flex items-center h-screen content-center justify-center text-white bg-darkgreen mx-auto desktop:pl-[296px] gap-[23px] py-[156px]">
            <div id='panesnews' className="flex flex-wrap items-start content-start px-[13px] py-[10px] gap-[79px] w-[493px] h-[264px] border-solid border-2 border-white">
                <p>Обновления #1</p>
            </div>
            <button className="flex content-center justify-center items-center p-[10px] gap-[10px] w-[493px] h-[264px] rounded-full border-solid border-2 border-white hover:animate-pulse text-[40px]" onClick={addDivNews}>
                <p>+</p>
            </button>
        </div>

        <Footer/>
        </>
    )
}
