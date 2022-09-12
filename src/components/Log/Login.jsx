import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import style from "../../components/Log/log.module.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) =>{
        e.preventDefault();
        const mailError= document.getElementById('mailError')
        const passError= document.getElementById('passError')

        axios({
            method:"post",
            url:`${process.env.REACT_APP_API_URL}api/user/login`,
            withCredentials: true,
            data: {
                email,
                password,
            }
        })
        .then((res) => {
            if (res.data.errors){
                mailError.innerHTML = res.data.errors.email
                passError.innerHTML = res.data.errors.paswword
            } else {
                window.location ='/'
            }
        })
        .catch ((err) => {
            console.log(err)
        })
    }
    return (
        <form action="" onSubmit={handleLogin} id="loginForm">
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name='email' id='email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
            <div className={style.mailerror} id="mailError"></div>
            
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" name='password' id='password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
            <div className={style.passerror} id="passError"></div>
            
            <input type="submit" value="connection" className={style.submit} />
        </form>
    );
};

export default Login;