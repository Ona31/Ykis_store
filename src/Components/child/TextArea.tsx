type Props = {
     name:string,
     
}


export default function TextArea({name}:Props){
    return(
   
        <textarea name={name} id="" className=" bg-[var(--sec)] text-[var(--text)] p-4 h-full">Messages</textarea>
    )
    
}