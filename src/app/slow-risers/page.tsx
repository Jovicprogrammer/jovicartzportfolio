import Image from "next/image"
import Navbar from "@/components/Navbar"
import Capa from "@/components/pagina-home/Capa"
import Sobre from "@/components/pagina-home/Sobre"
import HookPortfolio from "@/components/pagina-home/Hook-Portfolio"
import Playlist from "@/components/pagina-home/Playlist"
import Footer from "@/components/Footer"
import HomeNav from "@/components/pagina-home/home-nav"


import { Metadata } from "next";
import VoltarVesquicio from "@/components/Slow-Risers/Voltar-Vesquicio"
import { Dream_Orphans_Light, DreamOrphans } from "../fonts"
import NavbarSR from "@/components/Navbar-SR"
import FooterSR from "@/components/Footer-SR"
import CapaSR from "@/components/Slow-Risers/home-slowrisers/Capa-SR"
import HookPersonagens from "@/components/Slow-Risers/home-slowrisers/Hook-Personagens"
import PlaylistSR from "@/components/Slow-Risers/home-slowrisers/Playlist-SR"
import SobreSR from "@/components/Slow-Risers/home-slowrisers/Sobre-SR"
import HomeNavSR from "@/components/Slow-Risers/home-slowrisers/HomeNavSR"

export const metadata: Metadata = {
  title: "Slow Risers",
  description: "Página inicial de Slow Risers",
};


export default function HomeSlowRisers() {

    return (

        <div className="bg-gradient-to-b bg-vapid to-vanished ">

        <VoltarVesquicio/>

        <NavbarSR/>

        <div id="topo-sr">
          <CapaSR/>
        </div>

        <div id="sobre-sr">
        <SobreSR/>
        </div>

        <div id="hook-sr">
        <HookPersonagens/>
        </div>

        <div id="playlist-sr">
        <PlaylistSR/>
        </div>

        <HomeNavSR/>

        <FooterSR />

        </div>

    )

}