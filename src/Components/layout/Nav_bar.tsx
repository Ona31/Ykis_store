
import { CgShoppingBag } from "react-icons/cg"; 
//la nave bare componente
//-----------------------------

import Btn from "../child/Btn"
import Menu from "../child/Menu";
import Logo from "../child/Logo";
import { BarreTopp } from "../child/BarreTop";


export default function  NavComponent(){
     // La liste des naviagtions
  

     

    return(
       <>
       <header className=" flex flex-col z-10 fixed w-full bg-[var(--nor)] shadow-sm items-center">
         <BarreTopp/>
         <div className="flex py-2 w-full md:px-24 justify-between">
          <Logo style={"text-2xl font-bold  text-[var(--text)]"} stspan={"text-[var(--pr)]"}/>
        <Menu style={"md:flex hidden gap-8"} stylea={" flex items-center gap-2 text-[var(--text)]  text-md"}/>
       <div className="hidden md:flex items-center gap-4">
        <CgShoppingBag className="text-2xl" />
        
         <Btn href={""} desc={"Nous contacter!"} style={" md:flex hidden py-2 px-3 bg-[var(--pr)] text-white  rounded-md"}/>
       </div>
         </div>
         
       </header>
       </>
    )
}