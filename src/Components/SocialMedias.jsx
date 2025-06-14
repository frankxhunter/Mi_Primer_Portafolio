import { SocialLink } from "./SocialLInk"
import "./SocialMedias.css"
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsBriefcase } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
export function SocialMedias() {

    return <section className="social_media_section">
        <SocialLink icon={<BsGithub  className="icon_social" />} link={"https://shortfy.link/09E5AUln"}></SocialLink>
        <SocialLink icon={<BsBriefcase  className="icon_social" />} link={"https://shortfy.link/09E5AUln"}></SocialLink>
        <SocialLink icon={<BsLinkedin  className="icon_social" />} link={"https://shortfy.link/UukWeQrD"}></SocialLink>
        <SocialLink icon={<BiLogoGmail  className="icon_social" />} link={"mailto:frankmesad24@gmail.com"}></SocialLink>
        <SocialLink icon={<BsInstagram  className="icon_social" />} link={"https://shortfy.link/waLX1p62"}></SocialLink>

    </section>
}