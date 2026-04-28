import { BsTelegram } from "react-icons/bs"; 
import { AiFillInstagram } from "react-icons/ai"; 
import { CgFacebook } from "react-icons/cg"; 
import { BsLinkedin } from "react-icons/bs"; 
import { BsTiktok } from "react-icons/bs"; 
import { BsWhatsapp } from "react-icons/bs"; 



type Props = {
    style:string,
    stylen:string,
    div:string,
    content:string,
    showname :boolean,
}



export default function ReseauxSocial({style,stylen,div,content,showname = true}:Props){
    const res = [
        {name:"Whatsapp",urls:"",icon: BsWhatsapp },
        {name:"Tiktok",urls:"",icon: BsTiktok},
        {name:"Linkedin",urls:"",icon: BsLinkedin},
        {name:"Instagrm",urls:"",icon: AiFillInstagram},
        {name:"Telegram",urls:"",icon: BsTelegram},
        {name:"Facebook",urls:"",icon: CgFacebook},
    ]
    return(
        <div className={content}>
           {
            res.map((res,indeX)=>(
                <a href={res.urls}  key={indeX} className={div}>{<res.icon className={style}/>}
                {showname && (<span className={stylen}>{res.name}</span>)}
                 </a>
            ))
            
           }
        </div>
    )
}