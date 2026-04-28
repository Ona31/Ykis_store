

type Props = {
     style?:string,
     id?: string
     children :React.ReactNode;
}

export default function AllSection({style,children,id}:Props){
 
    return(
        <section className={style} id={id}>
         {children}
        </section>
    )
}
