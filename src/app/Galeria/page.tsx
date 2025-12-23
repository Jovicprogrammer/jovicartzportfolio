import ArtGalleryComponent from "@/components/ArtGalleryComponent";
import Footer from "@/components/Footer";
import { Metadata } from "next";

  export const metadata: Metadata = {
    title: "galeria de artes de vesquicio.",
    description: "Página com links importantes (e outros nem tanto)",
  };
  
export default function Gallery() {

    return (

        <div className="bg-cafecomleite">

            <ArtGalleryComponent/>

            <div className="pb-10"><Footer/></div>

        </div>

    )

}