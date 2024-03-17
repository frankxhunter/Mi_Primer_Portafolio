import { SocialLink } from "./SocialLInk"
import "./SocialMedias.css"
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
export function SocialMedias() {
    const iconSize = 30;

    return <section className="social_media_section">
        <SocialLink icon={<BsInstagram size={iconSize} className="icon_social" />} link={"https://www.instagram.com/frankmesa24"}></SocialLink>
        <SocialLink icon={<BsFacebook size={iconSize} className="icon_social" />} link={"https://www.facebook.com/frank.mesadominguez"}></SocialLink>
        <SocialLink icon={<BsLinkedin size={iconSize} className="icon_social" />} link={"https://www.linkedin.com/in/frank-mesa-dom%C3%ADnguez-2ab475251/"}></SocialLink>
        <SocialLink icon={<BsGithub size={iconSize} className="icon_social" />} link={"https://github.com/frankxhunter"}></SocialLink>
    </section>
}