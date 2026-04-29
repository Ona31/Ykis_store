import ReseauxSocial from "./ReseauxS";


export function BarreTopp(){
    return(
        <>
         <div className="flex bg-[var(--pr)] w-full justify-center p-2">
            <ReseauxSocial showname={false} content={"flex  gap-4 md:justify-start justify-center"} div={"flex items-center gap-4"} style={"text-[var(--nor)] text-xl"} stylen={"text-[var(--nor)]"}/>
         </div>
        </>
    )
}