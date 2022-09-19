import React, { useEffect }  from 'react';
import { useState } from 'react';

import style from "../../components/Log/log.module.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from '../../store/actions/auth-action';



const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const isConnected = useSelector(state => state.auth.isConnected)
    const errorMsg= useSelector(state=> state.auth.errorMsg)
    

    useEffect(()=>{
        console.log("déclenché")
        if(isConnected){
            navigate("/home")
        }

        if(errorMsg){
            const passError= document.getElementById('passError')
            passError.innerHTML = errorMsg

        }

    },[isConnected, errorMsg])

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
        }
        dispatch(loginUser(data))

    }
    return (
        <form action="" className={style.loginform} onSubmit={handleLogin} id="loginForm"
        >
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name='email' id='email' onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>

            <div>
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className={style.error} id="passError"></div>


            <input type="submit" value="connection" className={style.submit} />
        </form>
    );
};

export default Login;