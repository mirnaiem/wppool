import { useState } from "react";
import Dropdown from "./components/Dropdown";
const NavBar = () => {
 const [color, setColor]=useState(false);
 const changeColor=()=>{
  if(window.scrollY >= 720){
   setColor(true)
  } else{setColor(false)}
 }
 window.addEventListener('scroll', changeColor)
 return (
  <div className={`flex justify-center fixed top-2 w-full z-10 `}>
  <div className={`flex justify-between items-center w-[97%] mx-auto py-2 mb-2  rounded-2xl ${color?'bg-[#f3f3f3]':''}`}  >
   
   <img className="ps-4" src={`
    ${color?'https://i.ibb.co/4Rc7w5S/Group-1325.png':
    'https://i.ibb.co/kDZhHhY/logo.png'}`} alt="" />
   <div className="flex justify-around items-center gap-8 px-8">
    
   <Dropdown color={color}/>
   </div>
  </div>
  </div>
 );
};

export default NavBar;