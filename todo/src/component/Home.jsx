// import "./Home.module.css"
import css from "./Home.module.css"
const Home=()=>{
    return( 
        <div>
        <h3 className={css.title}>Home Title</h3> 
        <p className={css.text} style={{color:"black"}}>Hello, This is Home Page.</p>;
        </div>
    );
};
export default Home;