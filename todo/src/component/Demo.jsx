import MessageBar from "./message";
import State from "./State";
import TextBox from "./TextBox";
const Demo=()=>{
    return(
        <div>

        <h1>Harina</h1>
        <MessageBar message="this is a message from app.js"/>
         <MessageBar message="again from app.js"/>
        <State />
        <TextBox />
        </div>
    );
}
export default Demo;