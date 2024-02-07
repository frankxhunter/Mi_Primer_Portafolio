/* eslint-disable react/prop-types */
import "./SocialLink.css"

export function SocialLink({icon, link}){

    return <a className="link_social" href={link}>{icon}</a>

}