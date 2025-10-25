import Image from "next/image"
import Navbar from "@/components/Navbar"
import Capa from "@/components/pagina-home/Capa"
import Sobre from "@/components/pagina-home/Sobre"
import HookPortfolio from "@/components/pagina-home/Hook-Portfolio"
import Playlist from "@/components/pagina-home/Playlist"
import Footer from "@/components/Footer"
import HomeNav from "@/components/pagina-home/home-nav"


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slow Risers",
  description: "Página inicial de Slow Risers",
};


export default function HomeSlowRisers() {

    return (

        <div className="bg-green-900">

       <div className="flex items-center justify-center h-screen ">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate cumque cum commodi nisi delectus nihil minus, dolorum possimus eius perferendis molestiae quisquam impedit quasi sapiente iste molestias. Aspernatur, culpa.
        </p>
       </div>


        </div>

    )

}