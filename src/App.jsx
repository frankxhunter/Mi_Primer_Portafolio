import { Introduction } from "./Components/Introduction"

import { FaHandPointDown } from "react-icons/fa";
import "./App.css"
import { Proyects } from "./Components/Proyects";
import { Tecnologies } from "./Components/Tecnologies";
import { SocialMedias } from "./Components/SocialMedias";
function App() {

  return <div className="app">
     <Introduction></Introduction>
     <SocialMedias></SocialMedias>
     <FaHandPointDown size={25} className="handup"></FaHandPointDown>
    <Proyects></Proyects>
    <Tecnologies></Tecnologies>
  </div>
}


export default App
