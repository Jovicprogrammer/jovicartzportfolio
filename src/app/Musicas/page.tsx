'use client'

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Oskon } from "../fonts"

// ID global da sua playlist do YouTube
const PLAYLIST_ID = "PL5gb5sT3z0BASqAIPU5VQu934PjkQobUB";

// Adicione aqui os IDs individuais dos vídeos na mesma ordem da sua playlist
const playlist = [
    { id: 1, title: "Felício - Comunhão", videoId: "uVgdF-7SRz8" },
    { id: 2, title: "Jack Johnson - Upside Down", videoId: "e2vLWbaOITw" },
    { id: 3, title: "R.E.M - Shiny Happy People", videoId: "nsI2BdCmoCA" },
    { id: 4, title: "The Smiths - Please, Please, Please, Let Me Get What I Want", videoId: "RGcNW9OQ3g0" },
    { id: 5, title: "Filarmônica de Pasárgada - Cartão Postal", videoId: "jCBZ0-wp0oM" },
    { id: 6, title: "KT Tunstall - Suddenly I See", videoId: "eX7lFYAaO-c" },
    { id: 7, title: "TOMS DINER - DIXIE", videoId: "x1AAUde8zmI" },
    { id: 8, title: "Zé Ramalho - Chão de Giz", videoId: "RRB-rJEF0o4" },
    { id: 9, title: "Zero 7 - Destiny (Extended Mix)", videoId: "lIs9bsX4Dek" },
    { id: 10, title: "Quadeca - Illusion of Choice", videoId: "UVYcyoeKVKY" },
    { id: 11, title: "Boards of Canada - Roygbiv", videoId: "SM4tQcUt_mQ" },
    { id: 12, title: "Tribalistas - Velha Infância", videoId: "iyJDuJggiEM" },
    { id: 13, title: "Norah Jones - Those Sweet Words", videoId: "PMQtB3qjoh8" },
    { id: 14, title: "Tracy Chapman - Fast Car", videoId: "IJ8i49EqgYI" },
    { id: 15, title: "Lifehouse - You And Me", videoId: "8UiVtsVOERI" },
    { id: 16, title: "Lô Borges - Paisagem Da Janela", videoId: "d50EXVUzm_E" },
    { id: 17, title: "Sam Phillips - Reflecting Light", videoId: "em-6gZTDMvA" },
    { id: 18, title: "Omar Apollo - Drifting", videoId: "MnzA3ryOO48" },
    { id: 19, title: "Gilliard - O Sonho", videoId: "wf6fDQ_vVxc" },
    { id: 20, title: "FKA twigs - Lonely But Exciting Road", videoId: "NxN1vHoZV1M" }
];

export default function Musicas() {
    // Começa na música 2 por padrão
    const [currentVideoId, setCurrentVideoId] = useState("kd5KqlqIQIo");

    return (
        <div>
            <div className={`flex flex-col items-center justify-center bg-cafecomleite min-h-screen pt-6 ${Oskon.className}`}>
                <div>
                    <Navbar />
                </div>
                
                <div className="w-full">
                    <h2 className="flex justify-center pb-7 pt-15 text-5xl">playlist do vesquicio.</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 ml-40 gap-10 items-start">
                        {/* Player que carrega o vídeo específico E a playlist vinculada */}
                        <div className="pt-20 flex justify-center">
                            <iframe 
                                className="w-full max-w-md border-2 border-leitebranco" 
                                height="265" 
                                src={`https://www.youtube.com/embed/${currentVideoId}?list=${PLAYLIST_ID}&autoplay=1`} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen>
                            </iframe>
                        </div>

                        {/* Lista interativa */}
                        <div className="text-center md:text-left md:mr-10 max-h-[500px] overflow-y-auto pr-4">
                            <ol className="space-y-1">
                                {playlist.map((musica) => (
                                    <li key={musica.id}>
                                        <button
                                            onClick={() => setCurrentVideoId(musica.videoId)}
                                            className={`text-left w-full transition-colors hover:text-white cursor-pointer ${
                                                currentVideoId === musica.videoId ? "text-white underline font-bold" : "text-leitebranco"
                                            }`}
                                        >
                                            {musica.id}. {musica.title}
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}