import { SocialLink } from "./SocialLInk"
import "./SocialMedias.css"
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
export function SocialMedias() {

    return <section className="social_media_section">
        <SocialLink icon={<BsInstagram className="icon_social" />} link={"https://www.instagram.com/frankmesa24"}></SocialLink>
        <SocialLink icon={<BsFacebook className="icon_social" />} link={"https://www.instagram.com/frankmesa24"}></SocialLink>
        <SocialLink icon={<BsLinkedin className="icon_social" />} link={"https://www.instagram.com/frankmesa24"}></SocialLink>
        <SocialLink icon={<BsGithub className="icon_social" />} link={"https://www.instagram.com/frankmesa24"}></SocialLink>
    </section>
}