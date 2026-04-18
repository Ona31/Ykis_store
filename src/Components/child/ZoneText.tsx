

type Props ={
    children:React.ReactNode;
}


export default function ZoneTxt({children}:Props){
    return(
        <div className="bloc ">
           {children}
        </div>
    )
}