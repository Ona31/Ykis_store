
import { CgShoppingBag } from "react-icons/cg"; 
//la nave bare componente
//-----------------------------

import Btn from "../child/Btn"
import Menu from "../child/Menu";


export default function  NavComponent(){
     // La liste des naviagtions
  

     

    return(
       <>
       <header className=" flex z-10 justify-between fixed w-full py-2 px-24 bg-[var(--nor)] shadow-sm items-center">
         <div className="flex"> <h1 className="text-2xl font-bold  text-[var(--text)]"> <span className="text-[var(--pr)]">YKIS</span> store</h1></div>
        <Menu style={"flex gap-8"}/>
       <div className="flex items-center gap-4">
        <CgShoppingBag className="text-2xl" />
        
         <Btn href={""} desc={"Nous contacter!"} style={"py-2 px-3 bg-[var(--pr)] text-white  rounded-md"}/>
       </div>
       </header>
       
     
       </>
    )
}