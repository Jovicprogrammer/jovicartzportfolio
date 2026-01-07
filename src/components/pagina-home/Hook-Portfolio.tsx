import { Oskon } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function HookPortfolio() {

    return (

        <div className={`flex items-center justify-center bg-cafecomleite h-screen ${Oskon.className}`}>

        <Image src='/images/portfolio1.png'alt='imagem de portfolio' width={600} height={600}></Image>

        <div>
            <p className="text-5xl">venha ver meus projetos de identidade visual!!</p>
            
            <Link href='/Designs' className="bg-cafe inline-block p-4 rounded mt-10 text-2xl hover:underline ml-70">Ver designs</Link>
            
        
        </div>

        </div>


    )

}
