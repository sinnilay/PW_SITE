import * as React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './App.css'
import About from "./About";
import Customroutes from "./customroutes";
import { useState } from "react";

function Nav() {
 let [display,setdisplay] = useState("none")
 function toggle_display() {
      if (display==="none") {
            setdisplay("block")    
      }
      else setdisplay("none")
 }

  return (
    <>
    
     <nav class=" fixed top-0 left-0 right-0 bg-slate-900 p-4 flex justify-between sm:p-[15px] md:bg-slate-700 text-white sm:h-auto sm:w-full h-auto border-2 border-red-500 md:border-white">
           <div class=" text-2xl font-bold sm:text-3xl tracking-wider mt-1 ">
                 <img class=" w-32 md:w-36 "src="https://lab.pwskills.com/images/PWSkills-white.png" alt="" />
                 {/* <span class="text-yellow-500 font-serif sm:text-2xl"> PW </span> <span class =" sm:text-2xl font-serif text-pink-200"> SKILLS</span> */}
           </div>
           <div className='hidden sm:hidden md:block sm:font-bold sm:text-xl m-auto'>
                 <ul class="flex gap-6 ">
                 <li className='hover:underline hover:cursor-pointer hover:bg-slate-400 p-2'> <Link to="/">HOME</Link></li>
                 <li className='hover:underline hover:cursor-pointer p-2  hover:bg-slate-400'> <Link to="/about">ABOUT US </Link></li>
                 <li className='hover:underline hover:cursor-pointer p-2  hover:bg-slate-400' > CONTACT</li>
                 </ul>
           </div>
           <div>
              <button className=' hidden  bg-red-600 sm:hidden md:block  sm:font-bold sm:text-xl sm:p-2 hover:bg-red-400 rounded-3xl md:mt-2'>
                Login/signup
               </button>
           </div>
           <button onClick={toggle_display} id="btn" class=" text-2xl  font-bold sm:flex md:hidden border-2 border-white p-1 w-12 flex justify-center mt-1 "
           
           >&#9776;</button>
     </nav>
     <div id="nav" class=" md:hidden text-5xl text-bold text-white absolute top-[13%] h-80 w-full bg-slate-900"
     style={{display:display}} 
     >
        COMMING SOON
     </div>
    </>
  
  )
  
}



export default Nav
