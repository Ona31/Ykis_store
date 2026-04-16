import { GiCubeforce } from "react-icons/gi"; 
import { IoMdAppstore } from "react-icons/io"; 
import { CgShoppingBag } from "react-icons/cg"; 
//la nave bare componente
//-----------------------------

import Btn from "../child/Btn"


export default function  NavComponent(){
     // La liste des naviagtions
     const naveList = [
        {nav:"Home", lien:"#Home",icon:""},
        {nav:"About", lien:"#About",icon:""},
        {nav:"Services", lien:"#Services",icon:""},
        {nav:"Location/Contact", lien:"#LoC",icon:""},
        {nav:"Game Produit", lien:"",icon:<GiCubeforce />},
        {nav:"Store", lien:"",icon:<IoMdAppstore />},
       
        
     ]

     

    return(
       <>
       <header className=" flex z-10 justify-between fixed w-full py-2 px-24 bg-[var(--nor)] shadow-sm items-center">
         <div className="flex"> <h1 className="text-2xl font-bold  text-[var(--text)]"> <span className="text-[var(--pr)]">YKIS</span> store</h1></div>
        <nav className="flex ">
         <ul className="flex gap-8">
 {naveList.map((nav,index) =>(
        
            <li  key={index}><a className=" flex items-center gap-2 text-[var(--text)]  text-md" href={nav.lien}>{nav.nav}{nav.icon}</a></li>
      
       ))}
         </ul>
          
       </nav> 
       <div className="flex items-center gap-4">
        <CgShoppingBag className="text-2xl" />
        
         <Btn href={""} desc={"Nous contacter!"} style={"py-2 px-3 bg-[var(--pr)] text-white  rounded-md"}/>
       </div>
       </header>
       
     
       </>
    )
}