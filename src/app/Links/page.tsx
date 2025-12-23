import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { Metadata } from "next";
import { Oskon } from "../fonts";

  export const metadata: Metadata = {
    title: "links de vesquicio.",
    description: "Página com links importantes (e outros nem tanto)",
  };

export default function LinksPage() {


    return (    
        
        <div className={`${Oskon.className} flex flex-col bg-cafecomleite h-screen justify-center items-center pt-30`}>
            
        <Navbar />

        <h2 className="text-5xl pb-10">meus links.</h2>
        
        <div>
          <ul className="flex flex-col text-3xl justify-center items-center gap-2">
            <a href="https://www.youtube.com/@vesquicio" target="blank" className="hover:text-dourado transition">Youtube</a>
            <a href="https://www.instagram.com/vesquicio?igsh=NzJ5MWFqNmZ1czhr" target="blank" className="hover:text-dourado transition">Instagram</a>
            <a href="https://github.com/Jovicprogrammer" target="blank" className="hover:text-dourado">Github</a>
            {/* <a href="https://x.com/vesquicio" target="blank" className="hover:text-dourado transition">Twitter/X</a> */}
            <a href="https://letterboxd.com/joviczzz/" target="blank" className="hover:text-dourado transition">Letterboxd</a>
            <a href="https://www.last.fm/pt/user/VICT0664" target="blank" className="hover:text-dourado transition">Lastfm</a>
            <a href="https://www.albumoftheyear.org/user/vesquicio/" target="blank" className="hover:text-dourado transition">AOTY</a>
          </ul>
        </div>

        <Footer />

        </div>
    )

}