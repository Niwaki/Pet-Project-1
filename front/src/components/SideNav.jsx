export default function SideNav() {

    function authopage () {
        return console.log("Атворизация");
    }

    function swtch () {
        return console.log("Theme changed");
    }
    return (
        <div className="flex flex-col justify-center items-centrt w-[140px] h-screen phone:hidden fixed top-0 bg-darkgreen">
            <div className="flex flex-col content-center items-center justify-center w-[140px] h-[74px] bg-darkgreen text-white">
                <a href="#">ВЫХОД/ВХОД</a>
            </div>
            <div className="flex flex-col justify-center items-center content-center px-[10px] gap-[100px] bg-darkgreen w-[140px] h-[calc(100vh-74px-76px)] text-white">
                <a href="#">РАБОТА</a>
                <a href="#">РАБОТА</a>
                <a href="#">РАБОТА</a>
            </div>
            <div className="flex flex-col justify-center items-center content-center px-[10px] gap-[10px] bg-darkgreen w-[140px] h-[76] text-white">
                <a onClick={swtch}><img src='./img/sidenav/switch.png'></img></a>
            </div>
        </div>
    )
}