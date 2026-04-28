import Btn from "../child/Btn";
import Input from "../child/Input";
import TextArea from "../child/TextArea";




export default function Formul(){

    return(
        <div className=" flex flex-col bg-[var(--nor)] p-8 rounded-sm shadow hover:shadow-lg transition duration-300 gap-4">
          <Input type={"text"} plach={"Enter your name"} style={""} name={"nom"}/>
          <Input type={"Email;"} plach={"Enter your name"}  style={""} name={"email"} />
          <Input type={"Oject"} plach={"Enter your name"}  style={""} name={"oject"}/>
          <TextArea name=""/>
          <Btn
                      href={""}
                      desc={"Envoyer"}
                      style={
                        "p-3 bg-[var(--pr)] text-white text-xl font-semibold  text-center rounded-md"
                      }
                    />
        </div>
    )
}