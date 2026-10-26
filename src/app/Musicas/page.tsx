
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Oskon } from "../fonts"

export default function Musicas() {

    return (

        <div>
            <div className={`flex items-center justify-center bg-cafecomleite h-screen pt-6 ${Oskon.className}`}>
            <div>
                <Navbar></Navbar>
            </div>
            
                <div>
            <h2 className="flex justify-center pb-7 pt-15 text-5xl">playlist do vesquicio.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 ml-40 gap-10">
                <div className="pt-20">
                
                            <iframe className="w-full max-w-md border-2  border-leitebranco " height="265" src="https://www.youtube.com/embed/videoseries?si=Zj-5qFDiFs7LkZiB&amp;list=PL5gb5sT3z0BASqAIPU5VQu934PjkQobUB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className="text-center md:text-left md:mr-10">
                    <ol>
                        <li>1. Felício - Comunhão</li>
                        <li>2. Jack Johnson - Upside Down</li>
                        <li>3. R.E.M - Shiny Happy People</li>
                        <li>4. The Smiths - Please, Please, Please, Let Me Get What I Want</li>
                        <li>5. Filarmônica de Pasárgada - Cartão Postal</li>
                        <li>6. KT Tunstall - Suddenly I See</li>
                        <li>7. TOMS DINER - DIXIE</li>
                        <li>8. Zé Ramalho - Chão de Giz</li>
                        <li>9. Zero 7 - Destiny (Extended Mix)</li>
                        <li>10. Quadeca - Illusion of Choice</li>
                        <li>11. Boards of Canada - Roygbiv</li>
                        <li>12. Tribalistas - Velha Infância</li>
                        <li>13. Norah Jones - Those Sweet Words</li>
                        <li>14. Tracy Chapman - Fast Car</li>
                        <li>15. Lifehouse - You And Me</li>
                        <li>16. Lô Borges - Paisagem Da Janela</li>
                        <li>17. Sam Phillips - Reflecting Light</li>
                        <li>18. Omar Apollo - Drifting</li>
                        <li>19. Gilliard - O Sonho</li>
                        <li>20. FKA twigs - Lonely But Exciting Road</li>
                    </ol>
                </div>

            </div>
            
                </div>
            
            </div>
            <Footer></Footer>
        </div>

    )

}