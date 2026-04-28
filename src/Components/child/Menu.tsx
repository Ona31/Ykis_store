
import { IoMdAppstore } from "react-icons/io"
import {  NavLink, useLocation } from "react-router-dom"

type Props ={
    style:string,
    stylea:string
}


export default function Menu({style,stylea}:Props){
       const naveList = [
    { nav: "Home", lien: "/", type: "route", icon: "" },
    { nav: "About", lien: "#About", type: "anchor", icon: "" },
    { nav: "Services", lien: "#Services", type: "anchor", icon: "" },
    { nav: "Location/Contact", lien: "#LoC", type: "anchor", icon: "" },
    { nav: "Store", lien: "/store", type: "route", icon: <IoMdAppstore /> },
       
        
     ]
     const loction = useLocation()
     const isStorePge = loction.pathname === "/store";

    return(
    
                 <ul className={style}>
      {naveList.map((nav, index) => (
        <li key={index}>
          
          {nav.type === "route" ? (
            <NavLink className={({isActive})=> isActive? `${stylea} text-blue-900 font-bold`:stylea} to={nav.lien}>
              {nav.nav} {nav.icon}
            </NavLink>
          ) : (!isStorePge && 
            <a className={stylea} href={nav.lien}>
              {nav.nav}
            </a>
          )}

        </li>
      ))}
    </ul>
                  
    )
} 