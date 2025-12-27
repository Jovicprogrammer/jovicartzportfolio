import PortfolioComponent from "@/components/PortfolioComponent";
import { Metadata } from "next";

  export const metadata: Metadata = {
    title: "portfólio de vesquicio.",
    description: "Página com links importantes (e outros nem tanto)",
  };

export default function Footer() {

    return (

        <div>

        
        <PortfolioComponent/>

        </div>


    )

}