import React from "react"
export default function HomeNav() {

    return (

        <nav className="fixed bottom-3 z-[500] right-2 w-30 flex gap-2 items-center px-2 justify-center p-2 bg-cafe/80 rounded">

            <div className="flex flex-col gap-6 items-center justify-center h-auto ">
                <a href="#topo" className="hover:underline transition">Topo</a>
                <a href="#sobre" className="hover:underline transition">Sobre</a>
                <a href="#hook-portfolio" className="hover:underline transition  ">veja meu portfolio!</a>
                <a href="#playlist" className="hover:underline transition">Playlist</a>
            </div>
        </nav>

    )

}