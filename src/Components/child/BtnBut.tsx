
type Props={
    style : string,
    icon: React.ReactNode;
    onClick: ()=>  void;
}

export default function BtnBut(
    {style = "",

        icon,
        onClick,
    }:Props
){
    return(
        <>
         <button onClick={onClick} className={style}>{icon}</button>
        </>
       
    )
}