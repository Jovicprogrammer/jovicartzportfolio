import Navbar from "@/components/Navbar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "links de vesquicio.",
  description: "Página com links importantes (e outros nem tanto)",
};

export default function LinksPage() {


    return (    
        
        <div className="bg-cafecomleite h-screen">
            
        <Navbar />

        </div>
    )

}