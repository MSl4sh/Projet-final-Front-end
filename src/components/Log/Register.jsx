import React, { useState, useEffect } from 'react';
import style from "../../components/Log/log.module.css"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from '../../store/actions/auth-action';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const dispatch = useDispatch()
    const isConnected = useSelector(state => state.auth.isConnected)
    const errorMsg= useSelector(state=> state.auth.errorMsg)

    useEffect(()=>{
        console.log("déclenché")
        if(isConnected){
            navigate("/profil")
        }

        if(errorMsg){
            const passError= document.getElementById('passError')
            const mailError= document.getElementById('mailError')
            const pseudoError = document.getElementById('pseudoError')
            if(errorMsg){
                passError.innerHTML = errorMsg.password
            }
            if(errorMsg){
                pseudoError.innerHTML = errorMsg.pseudo
            }
            if(errorMsg){
                mailError.innerHTML = errorMsg.email
            }
            

        }

    },[isConnected, errorMsg])


    const handleRegister = (e) =>{
        
        e.preventDefault();

        const data = {
            email,
            pseudo,
            password,
        }
        dispatch(registerUser(data))
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
           
            <br />
            
            <input type="submit" value="connexion" className={style.submit} />
        </form>
    );
};

export default Register;