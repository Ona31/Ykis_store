import Logo from "../child/Logo";
import Menu from "../child/Menu";
import ReseauxSocial from "../child/ReseauxS";


export default  function Footer(){
    return(
        <div className="grid md:grid-cols-4 md:gap-24 gap-12 grid-cols-2 deg w-full px-8 py-12 md:py-18 md:px-24 ">
            <div className="bloc">
                <Logo style={"text-2xl font-bold mb-8 text-[var(--bg-pr)]"} stspan={"text-[var(--bg-pr)]"}/>
                 <h2 className="font-extralight text-3xl text-[var(--nor)] whitespace-nowrap">
            Why Choose us
          </h2>

          <p className="  font-light text-md text-[var(--bg-pr)] my-4">
            YKIS Store vous propose des équipements informatiques performants,
            durables et adaptés à tous vos besoins, que vous soyez étudiant,
            professionnel ou particulier.
          </p>
               
            </div>
          <div className="bloc">
              <h2 className="font-extralight text-xl mb-4 text-[var(--nor)] border-b-1  whitespace-nowrap">
            Navigations
          </h2>
             <Menu style={"flex flex-col gap-4"} stylea={" flex items-center gap-2 text-[var(--bg-pr)]  text-md"}/>
          </div>
          <div className="bloc">
                <h2 className="font-extralight text-xl mb-4 text-[var(--nor)] border-b-1  whitespace-nowrap">
           Reseaux
          </h2>
             <ReseauxSocial showname={true} content={"flex flex-col gap-4"} div={"flex items-center gap-4"} style={"text-[var(--nor)] text-3xl"} stylen={"text-[var(--nor)]"}/>
          </div>

         
        </div>
    )
}