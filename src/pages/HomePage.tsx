//la home page de l'application
//----------------------------

import Btn from "../Components/child/Btn";
import Maps from "../Components/child/Maps.js";
import ZoneTxt from "../Components/child/ZoneText";
import CardAbout from "../Components/parents/CardAbout";
import Formul from "../Components/parents/Formulaire.js";
import AllSection from "../Components/parents/Sections";
import { carAbout } from "../data/dataAbout.js";
import {servicesData} from "../data/dataService.js"

export default function HomePage() {
  return (
    <main className="flex flex-col w-full min-h-screen ">
      <AllSection
        id={"Home"}
        style={
          "flex w-full h-screen bg-[url('/bgd.jpg')] bg-cover bg-top items-center p-"
        }
      >
        <ZoneTxt>
          <h1 className="font-extralight text-8xl text-[var(--bg-pr)]">
            Welcome to <br /> KIS Store
          </h1>
          <h2 className="pr-96 font-light text-xl text-[var(--bg-pr)] my-8 wrap-break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad
            incidunt quos! Velit placeat enim odio? Nihil minus reprehenderit
            dolorum debitis quisquam libero veritatis magnam voluptates
            dignissimos. Eum, exercitationem sint?
          </h2>
          <div className="flex gap-4">
            <Btn
              href={""}
              desc={"Voir nos produits"}
              style={
                "p-3 bg-[var(--pr)] text-white text-xl font-semibold  rounded-md"
              }
            />
            <Btn
              href={""}
              desc={"Nous contacter"}
              style={
                "p-3 bg-transparent border-1 border-white text-white text-xl font-semibold  rounded-md"
              }
            />
          </div>
        </ZoneTxt>
      </AllSection>

      <AllSection
        id={"About"}
        style={"grid grid-cols-2 gap-18 w-full h-screen bg-[var(--br-pr)] px-24 py-20"}
      >
        <div className="bloc">
          <h2 className="font-extralight text-5xl text-[var(--text)] font-normal whitespace-nowrap">
            Why Choose us
          </h2>
          <p className="pr-26 font-light text-md text-[var(--bg-pr)] text-[var(--text-acc)]  my-8">
           YKIS Store vous propose des équipements informatiques performants, durables et adaptés 
           à tous vos besoins, que vous soyez étudiant, professionnel ou particulier.
          </p>
          <div className="flex bg-[var(--sec)] wrap-break-words">
            <p className="  p-12 rounded-ms">
             Nous mettons à votre disposition une large gamme d’ordinateurs et d’accessoires soigneusement sélectionnés pour leur qualité et leur performance. Notre objectif est de vous offrir des solutions fiables, accessibles et adaptées à votre utilisation quotidienne ou professionnelle.

En plus de la vente, nous proposons des services de maintenance pour diagnostiquer, réparer et optimiser vos appareils afin de garantir leur bon fonctionnement sur le long terme. Grâce à notre expertise, notre rapidité d’intervention et notre engagement envers la satisfaction client,
 nous vous accompagnons à chaque étape pour vous offrir une expérience simple, efficace et sécurisée.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {carAbout.map((item, index) => {
            const Icon = item.icon;

            return (
              <CardAbout
                key={index}
                style={`p-12 bloc rounded-sm shadow-c ${
                  index === 0 ? "bg-[var(--pr)] text-white" : "bg-[var(--nor)]"
                }`}
              >
                <div className="inline-flex p-4 rounded-2xl bg-[var(--sec)] text-2xl shadow">
                  <Icon  />
                </div>
                <h3
                  className=" font-bold text-2xl my-2
      "
                >
                  {item.title}
                </h3>
                <p>{item.desc}</p>
              </CardAbout>
            );
          })}
        </div>
      </AllSection>

      <AllSection
        id={"Services"}
        style={
          "flex flex-cols w-full h-screen bg-[url('/bg7.jpg')] bg-cover bg-top items-center "
        }
      >
        <div className="flex flex-col w-full h-full backdrop-blur-3xl items-center p-26">
          <h2 className="font-extralight text-5xl mb-8 text-[var(--nor)] font-normal whitespace-nowrap">
            Ors Services
          </h2>
          <p className="px-86 text-center font-light text-md text-[var(--nor)]  my-8">
            YKIS Store est votre partenaire de confiance en solutions informatiques. 
            Nous combinons vente, assistance et maintenance pour vous offrir une expérience complète et efficace. 
            Notre objectif est de vous garantir des produits fiables, un service rapide et un accompagnement professionnel à chaque étape.
          </p>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-[var(--bg-pr)] p-8 rounded-sm shadow hover:shadow-lg transition duration-300"
              >
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-[var(--pr)] text-white text-2xl mb-4">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {service.desc}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {service.points.map((point, i) => {
                    const CheckIcon = point.icon;

                    return (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckIcon className="text-[var(--pr)] text-sm" />
                        {point.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

        </div>
        </div>
      </AllSection>


      <AllSection
        id={"LoC"}
        style={
          "grid grid-cols-2 w-full  bg-[var(--bg-pr)] bg-cover bg-top  p-18 gap-30 justify-center"
        }
      >
        <div className="bloc "> <h2 className="font-extralight text-5xl mb-8 text-[var(--text)]  whitespace-nowrap">
         Location/Contact
        </h2>
        <p className=" font-light text-md text-[var(--bg-pr)] bg-[var(--pr)]  p-4 my-4">
     Venez nous rendre visite chez YKIS Store pour découvrir nos produits informatiques et bénéficier de nos services sur place.
        </p>
        <p className="p-4 font-light text-md text-[var(--text)] bg-[var(--sec)] my-4 ">
       Notre équipe est disponible pour vous assister, répondre à vos besoins et vous accompagner dans vos achats ou réparations.
        </p>
           <Maps/>
        </div>

        
       <Formul/>
       
      </AllSection>
    </main>
  );
}
