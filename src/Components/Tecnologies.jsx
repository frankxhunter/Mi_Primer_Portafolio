import React from "react"
import { TecnologyIcon } from "./TecnologyIcon"
import "./Tecnologies.css"

export function Tecnologies(){

    const myTecnologies = [
        {img: "SpringBoot.png", name: "SpringBoot"},
        {img: "java.svg", name: "Java"},
        {img: "angular.svg", name: "Angular"},
        {img: "react.svg", name: "React.js"},
        {img: "javascript.svg", name: "Javascript"},
        {img: "css.svg", name: "CSS"},
        {img: "https://svgl.app/library/html5.svg", name: "HTML"},
        {img: "node.svg", name: "Node.js"},
        {img: "mongo.svg", name: "MongoDB"},
        {img: "mysql.svg", name: "MySQL"},
        {img: "aws.png", name: "AWS"},

    ]

    const [title, setTitle] = React.useState(null);
    React.useEffect(()=>{
        import("../i18n").then(mod => mod.getMessages()).then(m => setTitle(m.tecnologies.title)).catch(()=>setTitle("Tecnologies"));
    },[])

    return <section className="tecnologies_section">
        <h2>{title ?? "Tecnologies"}</h2>
        <hr />
        <div className="tecnologies_container">
            {myTecnologies.map((e)=> {
                return <TecnologyIcon key={e.name} {...e} ></TecnologyIcon>
            })}
        </div>

    </section>

}