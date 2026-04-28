   type Props = {
        style?: string,
        href?:string,
       desc?: React.ReactNode
        
    }

export default function Btn({style,href,desc}:Props){
 
    return(
        <a  className={style} href={href}>{desc}</a>
    )
}