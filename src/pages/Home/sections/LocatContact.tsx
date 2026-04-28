import Maps from "../../../Components/child/Maps";
import Formul from "../../../Components/layout/Formulaire";
import AllSection from "../../../Components/layout/Sections";



export default function LocatConactSection(){
    return(
        <>
        <AllSection
        id={"LoC"}
        style={
          "grid md:grid-cols-2 w-full bg-[var(--bg-pr)] p-8 md:py-18 md:px-24 gap-12 md:gap-30 justify-center"
        }
      >
        <div className="bloc">
          <h2 className="font-extralight text-3xl md:text-5xl mb-8 text-[var(--text)] whitespace-nowrap">
            Location / Contact
          </h2>

          <p className="font-light text-md text-[var(--bg-pr)] bg-[var(--pr)] p-4 my-4">
            Venez nous rendre visite chez YKIS Store pour découvrir nos produits.
          </p>

          <p className="p-4 font-light text-md text-[var(--text)] bg-[var(--sec)] my-4">
            Notre équipe est disponible pour vous assister et vous accompagner.
          </p>

          <Maps />
        </div>

        <Formul />
      </AllSection>

        
        </>
    )
}