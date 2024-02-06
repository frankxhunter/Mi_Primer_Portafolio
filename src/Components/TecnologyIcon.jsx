/* eslint-disable react/prop-types */
import "./TecnologyIcon.css"

export function TecnologyIcon({img, name}){
    return <div className="container_icon">
        <img src={img} alt="" />
        <span>{name}</span>
    </div>
}