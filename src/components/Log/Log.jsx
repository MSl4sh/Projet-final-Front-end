import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import style from "./log.module.css"


const Log = (props) => {

    const [register, setRegister] = useState(props.register);
    const [login, setLogin] = useState(props.login);
    
    const handleStates = (e) =>{
        if(e.target.id === "register"){
            
            setLogin(false)
            setRegister(true)
        } else if(e.target.id === "login"){
            setLogin(true)
            setRegister(false)
        }
    }

    return (
        <div className={style.connectionform}>
            <div className={style.formcontainer}>
                <ul>
                    <li onClick={handleStates} id="register" className={register?style.active:null}>S'inscrire</li>
                    <li onClick={handleStates} id="login" className={login ? style.active:null}>Se connecter</li>
                </ul>
                
            </div>
            <div>
                {register && <Register/>}
                {login && <Login/>}
            </div>
        </div>
    );
};

export default Log;