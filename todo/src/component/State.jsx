import React, {useState} from "react";

function State(){
    const[count, setCount] = useState(0);
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={()=> setCount(count+1)}>Incerement</button>
        </div>
    );
}
export default State;