export default function SideNav() {

    function authopage () {
        return console.log("Атворизация");
    }

    function swtch () {
        return console.log("Theme changed");
    }
    return (
        <div className="phone:hidden fixed top-0">
            <div className="flex flex-col content-center items-center justify-center w-[140px] h-[74px] bg-darkgreen text-white">
                <a href="#">ВЫХОД/ВХОД</a>
            </div>
            <div className="flex flex-col justify-center items-center content-center px-[10px] gap-[241px] bg-darkgreen w-[140px] text-white">
                <a href="#">РАБОТА</a>
                <a href="#">РАБОТА</a>
                <a href="#">РАБОТА</a>
            </div>
            <div className="flex flex-col justify-center items-center content-center px-[10px] gap-[10px] bg-darkgreen w-[140px] h-[76] text-white">
                <a><img src='./img/sidenav/switch.png'></img></a>
            </div>
        </div>
    )
}

