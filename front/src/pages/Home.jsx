import BlockSteam from "../components/BlockSteam"
import SideNav from "../components/SideNav"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>

        <BlockSteam/>
        {/* <SideNav/> */}

        <div className="flex justify-center items-center content-center flex-wrap bg-darkgreen text-white text-[7px] h-screen">
            Главная
        </div>

        <Footer/>
        </>
    )
}
