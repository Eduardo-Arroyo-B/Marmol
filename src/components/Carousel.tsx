import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import imagen1 from "../assets/Colores-de-marmol-para-cocina2.jpg"
import imagen2 from "../assets/encimera-trasera-marmol-1024x678.jpg"
import imagen3 from "../assets/gettyimages-1660637176.avif"


function Carrusel() {
    return(
        <Carousel className="w-full h-full">
            <CarouselContent className="">
                <CarouselItem>
                    <img src={imagen1} alt="Imagen cocina marmol 1" className="object-cover w-full h-full rounded"/>
                </CarouselItem>
                <CarouselItem>
                    <img src={imagen2} alt="Imagen cocina marmol 2" className="object-cover w-full h-full rounded"/>
                </CarouselItem>
                <CarouselItem>
                    <img src={imagen3} alt="Imagen cocina marmol 3" className="object-cover w-full h-full rounded"/>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default Carrusel