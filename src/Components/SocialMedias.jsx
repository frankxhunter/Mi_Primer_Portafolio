import { SocialLink } from "./SocialLInk"
import "./SocialMedias.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
export function SocialMedias() {

    return <section className="social_media_section">
        <SocialLink icon={<BsGithub  className="icon_social" />} link={"https://github.com/frankxhunter"}></SocialLink>
        <SocialLink icon={<BsBriefcase  className="icon_social" />} link={"https://flowcv.com/resume/wlnl31ns80"}></SocialLink>
        <SocialLink icon={<BsLinkedin  className="icon_social" />} link={"https://www.linkedin.com/in/frank-mesa-dom%C3%ADnguez"}></SocialLink>
        <SocialLink icon={<BiLogoGmail  className="icon_social" />} link={"mailto:frankmesad24@gmail.com"}></SocialLink>

    </section>
}