type Props = {
     type:string,
     name:string,
     plach:string,
     style:string
}


export default function Input({type,name,plach,style}:Props){
    return(
        <input type={type} name={name} placeholder={plach} className={style+`${"flex bg-[var(--sec)] w-full p-4"}`}/>
    )
    
}