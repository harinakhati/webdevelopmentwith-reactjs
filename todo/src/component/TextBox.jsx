const TextBox=()=>{
    const onPClick=(v)=>{
        alert("Button clicked");
    }
    return(
        <div>
            <p onClick={onPClick}>this is me.</p>
        </div>
    );
}
export default TextBox