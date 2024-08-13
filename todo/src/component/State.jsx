import React, {useState} from "react";

function State(){
    const[count, setCount] = useState(0);
    const[name, setName] =useState(0);
    return (
        <div className="name">
        <p>Count: {count}</p>
        <button onClick={()=> setCount(count+1)}>Incerement</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset
        </button>
        <br />
        <p>Name:{name}</p>
        <button onClick={()=>setName('Deadpool')}>
            Set name as Moviecharacter 
        </button>
        <button onClick={()=>setName('')}>reset name</button>
        <button onClick={()=>setName('wolfrine')}>Set name as Anime </button>
        </div>
    );
}
export default State;
