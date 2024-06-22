import { useEffect } from "react";
import "./Introduction.css"
import Typed from "typed.js"
import { useRef } from "react";
export function Introduction() {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Software Engineer','Web developer', 'Mobile App Developer', 'Full Stack Developer'],
            typeSpeed: 50,
            loop: true,
            loopCount: 2,
        })

        return ()=>{
            typed.destroy();
        }
    },[])

    return <div className="container_introduction">
        <div>
            <h1 >Frank Mesa D.</h1>
            <h2><span ref={el} className="typedText" /></h2>
        </div>
        <hr />
        <p className="description_introdution">
            Desarrollador Web Junior apasionado por la creación de aplicaciones web intuitivas y eficientes. Dedicado a aprender y aplicar las mejores prácticas del desarrollo web.
            <br />
            Motivado por la resolución de problemas y la mejora continua, busco oportunidades para contribuir a proyectos innovadores y seguir desarrollando mis habilidades técnicas y de colaboración en equipo.
        </p>
        <img className="img_introduction" src="/personal_photos/1.jpg" alt="Frank Mesa" />

    </div>
}