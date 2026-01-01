import PortfolioComponent from "@/components/PortfolioComponent";
import { Metadata } from "next";

  export const metadata: Metadata = {
    title: "designs de vesquicio.",
    description: "Página exibindo alguns projetos de identidade visual",
  };

export default function Designs() {

    return (

        <div>

        <PortfolioComponent/>

        </div>


    )

}