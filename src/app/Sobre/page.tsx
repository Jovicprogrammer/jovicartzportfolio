
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Oskon } from "../fonts"

export default function Sobre() {

    return (

        <div>
            <div id="about" className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-cafecomleite min-h-screen md:h-screen ${Oskon.className}`}>
            <Navbar />
            <h2 className="text-5xl md:text-7xl md:ml-18 text-center md:text-left">Sobre</h2>
            <div id="sobre text" className="text-center md:text-left text-xl md:text-3xl md:mr-10">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum quibusdam quos exercitationem ipsam quo ex. Tempore quaerat repellendus totam beatae reiciendis officia corporis a labore, exercitationem accusamus quisquam doloremque unde!</p>
            </div>
            
            </div>

            <div>
                <Footer />
            </div>
        </div>

    )

}