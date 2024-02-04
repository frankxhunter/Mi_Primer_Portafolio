/* eslint-disable react/prop-types */
import "./CarouselCard.css"
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";
export function CarouselCard({ link, image, name, description }) {

    const [hoverOnCard, setHoverOnCard] = useState(false)
    const nodeRef = useRef(null)


    return <div className="container_card" onMouseOver ={()=>setHoverOnCard(true)} onMouseOut ={()=>setHoverOnCard(false)}>
        <a href={link} className="linkContainer_card">
            <img className="img_card" src={image} alt="name" />
            <CSSTransition 
              in={hoverOnCard}
              timeout={2000}
              classNames="animationHover"
              unmountOnExit
              nodeRef={nodeRef}>
                <div ref={nodeRef} className="info_card">
                <h4 className="title_card" >{name}</h4>
                <span className="description_card">{description}</span>
                </div>
            </CSSTransition>
        </a>

    </div>
}