// import colorText from "./index.module.css"
import  ven from"./index.module.css"
export default function TodoList() {
    const style={
        color:"red",
        fontSize:"20px"
    }
    return (
      <div>
        <h1 className={ven.colorText}>Hedy Lamarr's Todos</h1>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <ul>  <li className="highLightText">Invent new traffic lights</li>
          <li style={style} >Rehearse a movie scene</li>  
          <li style={style} >Improve spectrum technology</li>
        </ul>
      </div>
    );
  }





  