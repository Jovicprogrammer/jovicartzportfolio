import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Oskon } from "@/app/fonts"
export default function Navbar() {

    return (

        <nav className={`fixed top-8 z-[500] left-0 right-0 mx-auto max-w-5xl
                      flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-2
                       bg-cafe rounded ${Oskon.className}`}>

            <div className="flex gap-6 items-center justify-center h-auto text-2xl">
                <a href="/" className="hover:underline transition ml-10">Home</a>
                <a href="/Links" className="hover:underline transition mr-65">Links</a>
                <Image className="absolute w-27 hover:animate-spin" src="/images/vesquicioprint.webp" alt="sd" width={500} height={500} ></Image>
                <a href="/Portfolio" className="hover:underline transition">Portfolio</a>
                <Link href="/slow-risers">
                    <Image src="/images/SlowRisersLogo.webp" className="absolute top-2 w-25 right-40 hover:w-40 hover:right-30 hover:top-1 transition hover:rotate-5 " width={500} height={500} alt="dsd"></Image>
                </Link>
            </div>
        </nav>

    )

}