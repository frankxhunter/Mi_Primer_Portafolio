import { SocialLink } from "./SocialLInk"
import "./SocialMedias.css"
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
export function SocialMedias() {

    return <section className="social_media_section">
        <SocialLink icon={<BsGithub  className="icon_social" />} link={"https://github.com/frankxhunter"}></SocialLink>
        <SocialLink icon={<BsBriefcase  className="icon_social" />} link={"https://flowcv.com/resume/wlnl31ns80"}></SocialLink>
        <SocialLink icon={<BsLinkedin  className="icon_social" />} link={"https://www.linkedin.com/in/frank-mesa-dom%C3%ADnguez-2ab475251/"}></SocialLink>
        <SocialLink icon={<BiLogoGmail  className="icon_social" />} link={"mailto:frankmesad24@gmail.com"}></SocialLink>
        <SocialLink icon={<BsInstagram  className="icon_social" />} link={"https://www.instagram.com/frankmesa24"}></SocialLink>

    </section>
}