import { Oskon } from "@/app/fonts";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

export default function Footer() {

    return (

        <div className={`flex items-center justify-center bg-cafecomleite h-10 pt-10 pb-10 ${Oskon.className}`}>

        <p>Vesquicio. {currentYear}</p>


        </div>


    )

}
