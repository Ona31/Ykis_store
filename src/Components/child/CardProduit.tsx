import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai"; 

import Produits from "../../data/dataProduit"
import Btn from "./Btn";



export default function CardProd(){
    return(

        <>

        {
          Produits.map((item)=>(

           <div key={item.id} className="bloc shadow self-start">
            
                <div className="flex bg-[var(--card)] justify-center items-center p-4">
                    <img src={item.image} alt="" className="w-[150px] drop-shadow-[0_1px_1px_var(--ft)]" />
                </div>
                <div className="flex flex-col p-4">
                    <div className="font-bold items-center  w-full font-bold  flex justify-between"> 
                        <span className="text-3xl">{item.prix}$</span>
                         <span className="text-[var(--text-acc)]">{item.nom}</span></div>
                   <div className="bloc my-2">
                    <p className=" text-xl">{item.description}</p>
                    <div className="flex w-full justify-between items-center mt-4">
                        <div className="flex bg-[var(--pr-se)] text-[var(--nor)] items-center gap-5 rounded-4xl mt-4 p-2">
                            <AiFillStar className="" />
                            <span>5.0</span>
                        </div>
                        <span className="flex items-center" >| Pro-Quality</span>
                        <Btn
                 href={""}
                              desc={<AiOutlineWhatsApp />}
                              style={
                                "p-3 bg-[var(--pr)] text-white text-center text-xl font-semibold rounded-md"
                              }
                            />
                    </div>
                </div>
                </div>
                
           </div>

          ))
          
       }

            
            
        </>
    )
}