
import { CgShoppingBag } from "react-icons/cg"; 
//la nave bare componente
//-----------------------------

import Btn from "../child/Btn"
import Menu from "../child/Menu";



export default function  NavMobile(){
     // La liste des naviagtions
  

     

    return(
       <>

        <div className="flex">
      <Menu style={"flex gap-8"} stylea={" flex items-center gap-2 text-[var(--text)]  text-md"}/>
       <div className="flex items-center gap-4">
        <CgShoppingBag className="text-2xl" />
        
         <Btn href={""} desc={"Nous contacter!"} style={"py-2 px-3 bg-[var(--pr)] text-white  rounded-md"}/>
       </div>
     
        </div>
       
       </>
    )
}