export default function SideNav() {

    function authopage () {
        return console.log("Атворизация");
    }

    function swtch () {
        return console.log("Theme changed");
    }
    return (
        <nav className="flex fixed top-0 flex-col text-white w-36 h-screen">
            <div className="flex w-35 h-18 bg-darkgreen justify-center items-center h-16 border-white">
                <a className='no-underline hover:animate-pulse' href="#" onClick={authopage}>ВЫХОД/ВХОД</a>
            </div>
            <div className="flex bg-darkgreen justify-center h-screen items-center">
                <ul className="flex flex-col gap-20 items-center">
                    <li className="hover:animate-pulse">
                        <a className="no-underline hover:animate-pulse'" href="/about">PIDAR</a>
                    </li>
                    <li className="hover:animate-pulse">
                        <a className="no-underline hover:animate-pulse'" href="/about">SUKA</a>
                    </li>
                    <li className="hover:animate-pulse">
                        <a className="no-underline hover:animate-pulse'" href="/about">GOOD PENIS</a>
                    </li>
                </ul>
            </div>
            <div className="flex bg-darkgreen justify-center items-center">
                <img src="./img/sidenav/switch.png"><input onClick={swtch}></input></img>
            </div>
        </nav>
    )
}