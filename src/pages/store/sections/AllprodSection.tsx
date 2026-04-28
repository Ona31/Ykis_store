
import CardProd from "../../../Components/child/CardProduit";
import AllSection from "../../../Components/layout/Sections";



export default function AllProduitSection(){
    return(
        <>
         <AllSection style="md:px-30 px-4 py-30 md:py-50" id="">
        <div className="grid  grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 items-start">
           <CardProd/>
          
        </div>
                
         </AllSection>
        </>
    )
}