// import { Carousel } from "./Carousel/Carousel.jsx";
import React from "react"
import { Carousel } from "./Carousel/Carousel.jsx"
import "./Proyects.css"

export function Proyects(){
    const [title, setTitle] = React.useState(null);
    React.useEffect(()=>{
        import("../i18n").then(mod => mod.getMessages()).then(m => setTitle(m.projects.title)).catch(()=>setTitle("Projects"));
    },[])

    return <section className="container_proyects">
         <h2>{title ?? "Projects"}</h2>
            <hr />
         <Carousel></Carousel>
         {/* <SwiperComponent></SwiperComponent> */}
    </section>
}