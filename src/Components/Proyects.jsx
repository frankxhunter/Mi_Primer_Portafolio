// import { Carousel } from "./Carousel/Carousel.jsx";
import { Carousel } from "./Carousel/Carousel.jsx"
import "./Proyects.css"

export function Proyects(){
    return <section className="container_proyects">
         <h2>Estos son mis proyectos ✌️</h2>
            <hr />
         <Carousel></Carousel>
         {/* <SwiperComponent></SwiperComponent> */}
    </section>
}