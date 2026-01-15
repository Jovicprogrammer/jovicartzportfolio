import { Oskon } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

export default function HookPortfolio() {

    return (

        <div className={`flex flex-col md:flex-row items-center justify-center bg-cafecomleite min-h-screen md:h-screen py-10 md:py-0 gap-8 px-4 ${Oskon.className}`}>

        <Image src='/images/portfolio1.png' alt='imagem de portfolio' width={600} height={600} className="w-full max-w-md md:max-w-none md:w-auto"></Image>

        <div className="text-center md:text-left">
            <p className="text-3xl md:text-5xl">venha ver meus projetos de identidade visual!!</p>
            
            <Link href='/Designs' className="bg-cafe inline-block p-4 rounded mt-6 md:mt-10 text-xl md:text-2xl hover:underline">Ver designs</Link>
            
        
        </div>

        </div>


    )

}