
type Props = {
    style:string,
     children:React.ReactNode;
}


export default function CardAbout({style,children}:Props){
    return(
      <div className={style}>
        {children}
      </div>
    )
}