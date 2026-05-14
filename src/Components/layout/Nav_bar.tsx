import { BiMenu } from "react-icons/bi"; 
import { BiX } from "react-icons/bi"; 



import { CgShoppingBag } from "react-icons/cg"; 
//la nave bare componente
//-----------------------------

import Btn from "../child/Btn"
import Menu from "../child/Menu";
import Logo from "../child/Logo";

import MenuMobile from "../child/MenuMobile";
import { useState } from "react";
import BtnBut from "../child/BtnBut";



export default function  NavComponent(){
     // La liste des naviagtions

    const [open_menu,setOpen_menu] = useState(false);
    function Onclick(){
      setOpen_menu(!open_menu)
    }

    return(
       <>
       <header className=" flex md:px-0   px-4  z-10 fixed w-full bg-[var(--nor)] shadow-sm items-center">
       
         <div className="flex py-2 w-full md:px-24 justify-between">
          <Logo style={"text-2xl font-bold left-0 text-[var(--text)]"} stspan={"text-[var(--pr)]  "}/>
        <Menu style={"md:flex hidden items-center gap-8"} stylea={" flex items-center gap-2 text-[var(--text)]  text-md"}/>
        {open_menu && <MenuMobile style={"md:hidden flex gap-8 ease-in-out w-full  right-0 backdrop-brightness-75 mt-8 flex-col bg-[var(--blur)] absolute backdrop-blur-3xl  transform duration-700 ease-out p-4"}  stylea={" flex items-center gap-2 text-[var(--text)]  text-md"}/>}
        
       <div className="hidden md:flex items-center gap-4">
        <CgShoppingBag className="text-2xl" />
        
         <Btn href={""} desc={"Nous contacter!"} style={" md:flex hidden py-2 px-3 bg-[var(--pr)] text-white  rounded-md"}/>
       </div>
         </div>
          

          <BtnBut onClick={Onclick} icon={open_menu? <BiX />:<BiMenu />} style={"text-[var(--text)] md:hidden font-bold text-2xl"}/>
          
       
       </header>
       </>
    )
}