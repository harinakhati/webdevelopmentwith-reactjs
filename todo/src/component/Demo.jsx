import MessageBar from "./message";
import State from "./State";
import TextBox from "./TextBox";
const Demo=()=>{
    return(
        <div>
        <h1>Harina</h1>
        <MessageBar message="This is a message from app.js"/>
         <MessageBar message="Again from app.js"/>
        <State />
        <TextBox />
        </div>
    );
}
export default Demo;