import React from "react"
import Link from "next/link";
import { ChevronLeft } from 'lucide-react';
export default function VoltarVesquicio() {

    return (

        <Link href='/'>
            <div className="fixed bottom-3 z-[500] left-2 flex gap-2 items-center px-2 justify-center p-2 bg-cafe/80 rounded-full h-15 w-15 hover:h-20 hover:w-20 transition-all">
                <ChevronLeft className="w-7 h-7 text-dourado cursor-pointer" />
            </div>
        </Link>

    )

}