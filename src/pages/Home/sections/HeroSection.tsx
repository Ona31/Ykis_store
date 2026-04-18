import Btn from "../../../Components/child/Btn";
import ReseauxSocial from "../../../Components/child/ReseauxS";
import ZoneTxt from "../../../Components/child/ZoneText";
import AllSection from "../../../Components/parents/Sections";

export default function HeroSection(){
    return(
        <>
         <AllSection
        id={"Home"}
        style={
          " md:flex w-full md:h-screen bg-[url('/bgd1.jpg')] md:bg-[url('/bgd.jpg')] bg-cover bg-top md:items-center md:p-24 pb-20 pr-8 pl-8 pt-50"
        }
      >
        <ZoneTxt>
          <h1 className="font-extralight md:text-8xl text-center md:text-lefttext-center md:text-left text-6xl text-[var(--bg-pr)]">
            Welcome to <br />YKIS Store
          </h1>

          <h2 className="md:pr-96 text-center md:text-left
         font-light text-xl text-[var(--bg-pr)] my-8 break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad
            incidunt quos! Velit placeat enim odio? Nihil minus reprehenderit
            dolorum debitis quisquam libero veritatis magnam voluptates
            dignissimos. Eum, exercitationem sint?
          </h2>
           <ReseauxSocial showname={false} content={"flex my-8 gap-4 md:justify-start justify-center"} div={"flex items-center gap-4"} style={"text-[var(--nor)] text-3xl"} stylen={"text-[var(--nor)]"}/>
          <div className=" flex md:flex-row flex-col gap-4">
            <Btn
              href={""}
              desc={"Voir nos produits"}
              style={
                "p-3 bg-[var(--pr)] text-white text-center text-xl font-semibold rounded-md"
              }
            />
            <Btn
              href={""}
              desc={"Nous contacter"}
              style={
                "p-3 bg-transparent border  text-center  border-white text-white text-xl font-semibold rounded-md"
              }
            />
          </div>
        </ZoneTxt>
      </AllSection>
        </>
    )
}