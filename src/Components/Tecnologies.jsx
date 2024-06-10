import { TecnologyIcon } from "./TecnologyIcon"
import "./Tecnologies.css"

export function Tecnologies(){

    const myTecnologies = [
        {img: "java.jpg", name: "Java"},
        {img: "JavaScript.png", name: "Javascript"},
        {img: "css.jpeg", name: "CSS"},
        {img: "html.png", name: "HTML"},
        {img: "reactjs.png", name: "React.js"},
        {img: "nodejs.png", name: "Node.js"},
        {img: "mongodb.jpg", name: "MongoDB"},
        {img: "python.jpg", name: "Python"},

    ]

    return <section className="tecnologies_section">
        <h2>Tecnologías que utilizo 🧐</h2>
        <hr />
        <div className="tecnologies_container">
            {myTecnologies.map((e)=> {
                return <TecnologyIcon key={e.name} {...e} ></TecnologyIcon>
            })}
        </div>

    </section>

}