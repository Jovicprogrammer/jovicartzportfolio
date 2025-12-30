import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Oskon } from "@/app/fonts"
export default function Navbar() {

    return (

        <nav className={`fixed top-8 z-[500] left-0 right-0 mx-auto max-w-5xl flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-2 bg-cafe rounded ${Oskon.className}`}>

            <div className="flex gap-6 items-center justify-center h-auto text-2xl">
                <Link href="/" className="hover:underline transition ml-20">Home</Link>
                <Link href="/Links" className="hover:underline transition mr-20">Links</Link>
                <Image className="absolute w-27 hover:animate-spin" src="/images/vesquicioprint.webp" alt="sd" width={500} height={500} ></Image>
                <Link href="/Portfolio" className="hover:underline transition ml-25">Portfolio</Link>
                <Link href="/Galeria" className="hover:underline transition">Galeria de Artes</Link>
                
            </div>
        </nav>

    )

}