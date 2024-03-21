import { Introduction } from "./Components/Introduction"
import { FaHandPointDown } from "react-icons/fa";
import "./App.css"
import { Proyects } from "./Components/Proyects";
import { Tecnologies } from "./Components/Tecnologies";
import { SocialMedias } from "./Components/SocialMedias";
function App() {

  return <div className="app">
    <section className="section">
      <Introduction></Introduction>
      <SocialMedias></SocialMedias>
    <FaHandPointDown  className="handup"></FaHandPointDown>
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
