

type Props ={
    children:React.ReactNode;
}


export default function ZoneTxt({children}:Props){
    return(
        <div className="bloc p-24 ">
           {children}
        </div>
    )
}