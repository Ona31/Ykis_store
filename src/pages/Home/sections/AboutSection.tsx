import CardAbout from "../../../Components/parents/CardAbout";
import AllSection from "../../../Components/parents/Sections";
import { carAbout, type AboutType } from "../../../data/dataAbout";

export default function AboutSection(){
    return(
        <>
          {/* ABOUT */}
              <AllSection
                id={"About"}
                style={
                  "grid md:grid-cols-2 grid-cols-1 gap-18 w-full md:h-screen bg-[var(--br-pr)] py-8 md:px-24 md:py-20"
                }
              >
                <div className="bloc  bg-[var(--nor)] md:shadow-c p-8 md:p-12">
                  <h2 className="font-extralight md:text-5xl text-4xl text-center md:text-start  text-[var(--text)] whitespace-nowrap">
                    Why Choose us
                  </h2>
        
                  <p className=" font-light text-center md:text-start  text-xl text-[var(--text-acc)] my-8">
                    YKIS Store vous propose des équipements informatiques performants,
                    durables et adaptés à tous vos besoins, que vous soyez étudiant,
                    professionnel ou particulier.
                  </p>
        
                  <div className="flex break-words">
                    <p className=" text-center md:text-start text-[var(--text)] font-light text-md">
                      Nous mettons à votre disposition une large gamme d’ordinateurs et
                      d’accessoires soigneusement sélectionnés pour leur qualité et leur
                      performance. Notre objectif est de vous offrir des solutions
                      fiables, accessibles et adaptées à votre utilisation quotidienne ou
                      professionnelle. En plus de la vente, nous proposons des services de
                      maintenance pour diagnostiquer, réparer et optimiser vos appareils
                      afin de garantir leur bon fonctionnement sur le long terme. Grâce à
                      notre expertise, notre rapidité d’intervention et notre engagement
                      envers la satisfaction client, nous vous accompagnons à chaque
                      étape pour vous offrir une expérience simple, efficace et
                      sécurisée.
                    </p>
                  </div>
                </div>
        
                <div className="grid md:grid-cols-2 gap-4 md:p-o px-8">
                  {carAbout.map((item:AboutType, index: number) => {
                    const Icon = item.icon;
        
                    return (
                      <CardAbout
                        key={index}
                        style={`p-12 bloc rounded-sm shadow-c ${
                          index === 0
                            ? "bg-[var(--pr)] text-white"
                            : "bg-[var(--nor)]"
                        }`}
                      >
                        <div className="inline-flex p-4 rounded-2xl bg-[var(--sec)] text-2xl shadow">
                          <Icon className="text-[vatr(--text)] text-xl" />
                        </div>
        
                        <h3 className="font-bold text-2xl my-2">
                          {item.title}
                        </h3>
        
                        <p>{item.desc}</p>
                      </CardAbout>
                    );
                  })}
                </div>
              </AllSection>
        </>
    )
}