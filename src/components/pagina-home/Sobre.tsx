import { Oskon } from "@/app/fonts";

export default function Sobre() {

    return (

        <div className={`grid grid-cols-1 md:grid-cols-2 items-center justify-center bg-cafecomleite min-h-screen md:h-screen gap-8 py-10 md:py-0 px-4 ${Oskon.className}`}>

        <h2 className="text-5xl md:text-7xl md:ml-10 text-center md:text-left">Sobre</h2>

        <div className="text-center md:text-left text-xl md:text-3xl md:mr-10">
            <p>ei, eai! me chamo vesquicio e este é meu sonho febril. desde muito pequeno sou apaixonado por fantasia e a ideia de criar histórias através da arte (e devaneios) sempre me fascinou. a essa altura da minha vida, ainda busco aquela magia da infância, exercitando minha criatividade através de desenhos, escrita, programação, edição de imagens e vídeos e o que mais cruzar o meu caminho. se curtir essa vibe - ou até mesmo se identificar com o que falei - talvez considere ficar por aqui. =) </p>
        </div>


        </div>


    )

}