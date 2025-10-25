import Navbar from "@/components/Navbar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio de vesquicio.",
  description: "Página com o portfolio de vesquicio",
};

export default function PortfolioPage() {


    return (    
        
        <div className="bg-cafecomleite h-screen">
            
        <Navbar />

        </div>
    )

}