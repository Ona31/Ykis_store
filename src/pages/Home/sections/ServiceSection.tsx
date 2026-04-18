import Btn from "../../../Components/child/Btn";
import AllSection from "../../../Components/parents/Sections";
import { servicesData, type ServiceType } from "../../../data/dataService";

export default function ServiceSection(){
    return(
        <>
          <AllSection
        id={"Services"}
        style={
          "flex flex-cols w-full  bg-[url('/bg7.jpg')] bg-cover bg-top items-center "
        }
      >
        <div className="flex flex-col w-full h-full backdrop-blur-3xl items-center p-8 md:px-24 md:py-18">

          <h2 className="font-extralight text-3xl md:text-5xl mb-8 text-[var(--nor)] whitespace-nowrap">
            Our Services
          </h2>

          <p className="md:px-86 text-center font-light text-md text-[var(--nor)] mb-16">
            YKIS Store est votre partenaire de confiance en solutions informatiques.
            Nous combinons vente, assistance et maintenance pour vous offrir une
            expérience complète et efficace.
          </p>

          <div className="grid md:gap-0 gap-8 grid-cols-1 md:grid-cols-3 ">
            {servicesData.map((service:ServiceType, index:number) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className={`flex  items-center flex-col bg-[var(--nor)] p-8 rounded-sm shadow hover:shadow-lg transition duration-300 ${index === 1 ? "scale-y-110":""}`}>
                  <div className="inline-fit p-4 rounded-2xl bg-[var(--pr)] text-white text-2xl mb-4">
                    <Icon/>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-[var(--text-acc)] text-sm mb-4  text-center">
                    {service.desc}
                  </p>

                  <ul className="space-y-2">
                    {service.points.map((point, i:number) => {
                      const CheckIcon = point.icon;

                      return (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-[var(--text)]"
                        >
                          <CheckIcon className="text-[var(--pr)] text-sm" />
                          {point.text}
                        </li>
                      );
                    })}
                  </ul>
                     <Btn
              href={""}
              desc={"En Savoir +"}
              style={
                "py-3 px-4 bg-[var(--pr)] inline-fit mt-8 text-[var(--bg-pr)] text-md font-semibold rounded-md"
              }
            />
                </div>
                
              );
            })}
          </div>
        </div>
      </AllSection>
        </>
    )
}