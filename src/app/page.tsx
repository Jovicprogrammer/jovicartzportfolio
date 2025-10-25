import Image from "next/image"
import Navbar from "@/components/Navbar"
import Capa from "@/components/pagina-home/Capa"
import Sobre from "@/components/pagina-home/Sobre"
import HookPortfolio from "@/components/pagina-home/Hook-Portfolio"
import Playlist from "@/components/pagina-home/Playlist"
import Footer from "@/components/Footer"
import HomeNav from "@/components/pagina-home/home-nav"
import FloatingMusicPlayer from "@/components/MusicPlayer"

export default function Home() {

    return (

        <div className="bg-cafecomleite h-screen">

        <Navbar />

        <div id="topo">
            <Capa />
        </div>

        <div id="sobre">
            <Sobre />
        </div>

        <div id="hook-portfolio">
            <HookPortfolio />
        </div>

        <div id="playlist">
            <Playlist />
        </div>

        <div>
            <HomeNav />
        </div>

        <div>
            <Footer />
        </div>


        </div>

    )

}