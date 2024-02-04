import { Introduction } from "./Components/Introduction"

import { FaHandPointDown } from "react-icons/fa";
import "./app.css"
import { Proyects } from "./Components/Proyects";
function App() {

  return <div className="app">
     <Introduction></Introduction>
    
     <FaHandPointDown size={25} className="handup"></FaHandPointDown>
    <Proyects></Proyects>
  </div>
}


export default App
