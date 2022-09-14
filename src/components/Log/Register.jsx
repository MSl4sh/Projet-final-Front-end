import React, { useState } from 'react';
import axios from 'axios';
import style from "../../components/Log/log.module.css"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const passError= document.getElementById('passError')
    const mailError= document.getElementById('mailError')
    const pseudoError= document.getElementById('pseudoError')


    const handleRegister = (e) =>{
        console.log("coucou")
        e.preventDefault();
        axios({
            method:"POST",
            url:`${process.env.REACT_APP_API_URL}api/user/register`,
            data: {
                email,
                pseudo,
                password,
            }
        })
        .then((res) => {
            if (res.data.errors){
                pseudoError.innerHTML = res.data.errors.pseudo
                mailError.innerHTML = res.data.errors.email
                passError.innerHTML = res.data.errors.password
            } else {
                console.log("hello")
                navigate("/")
            }
        })
        .catch ((err) => {
            console.log(err)
        })
    }
    
    return (
        <form action="" onSubmit={handleRegister} className={style.loginform} id="loginForm">
            
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name='email' id='email' onChange={(e) =>setEmail(e.target.value)} value={email}/>
            <div className={style.error} id="mailError"></div>

            <label htmlFor="pseudo">Pseudo</label>
            <br />
            <input type="text" name='pseudo' id='pseudo' onChange={(e) =>setPseudo(e.target.value)} value={pseudo}/>
            <div className={style.error} id="pseudoError"></div>
            
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input type="password" name='password' id='password' onChange={(e) =>setPassword(e.target.value)} value={password}/>
            <div className={style.error} id="passError"></div>
            <br />
            <div >
                <input type="checkbox" name="CG" id="CG" />
                <label htmlFor="CG" >Accepter conditions générales d'utilisation</label>
            </div>
            <br />
            
            <input type="submit" value="connection" className={style.submit} />
        </form>
    );
};

export default Register;