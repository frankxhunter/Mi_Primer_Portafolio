import { TecnologyIcon } from "./TecnologyIcon"
import "./Tecnologies.css"

export function Tecnologies(){

    const myTecnologies = [
        {img: "java.svg", name: "Java"},
        {img: "javascript.svg", name: "Javascript"},
        {img: "css.svg", name: "CSS"},
        {img: "https://svgl.app/library/html5.svg", name: "HTML"},
        {img: "react.svg", name: "React.js"},
        {img: "angular.svg", name: "Angular"},
        {img: "node.svg", name: "Node.js"},
        {img: "mongo.svg", name: "MongoDB"},
        {img: "mysql.svg", name: "MySQL"},

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