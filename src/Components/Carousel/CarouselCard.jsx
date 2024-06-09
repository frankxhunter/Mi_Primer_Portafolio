/* eslint-disable react/prop-types */
import "./CarouselCard.css"
export function CarouselCard({ link, image, name, description }) {



    return <div className="container_card" >
        <a href={link} target="_blank" className="linkContainer_card" rel="noreferrer">
            <div>
                <img className="img_card" src={image} alt="name" />
            </div>
            <div className="info_card">
                <h4 className="title_card" >{name}</h4>
                <span className="description_card">{description}</span>
            </div>
        </a>

    </div>
}