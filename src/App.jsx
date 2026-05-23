import React from "react"
import { Introduction } from "./Components/Introduction"
import { FaHandPointDown } from "react-icons/fa";
import "./App.css"
import { Proyects } from "./Components/Proyects";
import { Tecnologies } from "./Components/Tecnologies";
import { SocialMedias } from "./Components/SocialMedias";
import { BackgroundParticles } from "./Components/BackgroundParticles";
import i18n from "./i18n";
import LanguageSwitcher from "./Components/LanguageSwitcher";

function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(()=>{
    i18n.initI18n().then(result=>{
      if (result && result.messages && result.messages.meta && result.messages.meta.title) {
        document.title = result.messages.meta.title;
      }
    }).catch(()=>{}).finally(()=>setLoaded(true))
  },[])
  return <div className="app">
    <LanguageSwitcher></LanguageSwitcher>
    <section className="section">
      <Introduction></Introduction>
      <SocialMedias></SocialMedias>
      <FaHandPointDown className="handup"></FaHandPointDown>
      <BackgroundParticles></BackgroundParticles>
    </section >
    <section className="section" >
      <Proyects></Proyects>
    </section>
    <section className="section">
      <Tecnologies></Tecnologies>
    </section>
  </div>
}


export default App
