import {useState} from "react";
const TextBox=()=>{
    const[name,setName]=useState('')

    const onPClick=(v)=>{
        alert("Button clicked");
    }
    const updateName=(e)=>{
        const username=e.target.value;
    setName(username);
    }
    return(
        <div>
            <p onClick={onPClick}>This is me.{name}</p>
            <input value={name} onChange={updateName} />
        </div>
    );
}
export default TextBox;