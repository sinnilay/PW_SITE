import { Route,Routes } from "react-router-dom";
import Homepage from "./homepage";
import About from "./About";
function Customroutes() {
  return(
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About  />} />
    </Routes>
  )
}
export default Customroutes