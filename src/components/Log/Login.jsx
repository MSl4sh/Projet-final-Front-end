import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import style from "../../components/Log/log.module.css"
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) =>{
        e.preventDefault();
        const mailError= document.getElementById('mailError')
        const passError= document.getElementById('passError')

        axios({
            method:"POST",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            // withCredentials: true,
            data: {
                email,
                password,
            }
        })
        .then((res) => {
            if (res.data.errors){
                
                passError.innerHTML = res.data.errors
            } else {
                navigate("/")
            }
        })
        .catch ((err) => {
            console.log(err)
        })
    }
    return (
        <form action="" className={style.loginform} onSubmit={handleLogin} id="loginForm"
        >
            <div>
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name='email' id='email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
            </div>
            
            <div>
                <label htmlFor="password">Mot de passe</label>
                <br />
                <input type="password" name='password' id='password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
            </div>
            <div className={style.error} id="passError"></div>
            
            
            <input type="submit" value="connection" className={style.submit} />
        </form>
    );
};

export default Login;