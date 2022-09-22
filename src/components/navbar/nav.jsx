import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUser, faRightToBracket,faMusic, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import style from "./nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from '../../store/actions/auth-action';
import Logsection from './Logsection';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userInfo } from '../../store/actions/user-action';

const Nav = () => {
    const dispatch= useDispatch()
    const userId = useSelector(state=> state.auth.userId)
    const isConnected = useSelector(state => state.auth.isConnected)
    const navigate = useNavigate()
    
    
    

    useEffect(()=>{

        console.log(userId)
        
        dispatch(userInfo(userId))
        

    },[isConnected])

    const handleLogout = (e) =>{
        dispatch(logoutUser())

    }
    const handleLogin = (e) =>{
        navigate("/connection")

    }
    const handleHome = (e) =>{
        navigate("/")

    }
    const handleProfil = (e) =>{
        if(isConnected){
            navigate("/profil")
        } else{
            navigate("/connection")
        }

    }
    const handleUsers = (e) =>{
        
        if(isConnected){
            navigate("/users")
        } else{
            navigate("/connection")
        }
        
            
        

    }
    return (
        <div className={style.navbar}>
            <div className={style.navimg}>
                <img src="https://zupimages.net/up/22/38/epj7.png" alt="" className={style.logo}/>
            </div>
            <div className={style.menu}>
                <div className={style.icongroup}>
                    <h2><div className={style.icon} onClick={handleHome}><FontAwesomeIcon icon={faHouse} /></div></h2>
                    <h2><div className={style.icon} ><FontAwesomeIcon icon={faMusic} /></div></h2>
                    <h2><div className={style.icon} onClick={handleUsers}><FontAwesomeIcon icon={faUserGroup} /></div></h2>
                    <h2><div className={style.icon} onClick={handleProfil}><FontAwesomeIcon icon={faUser} /></div></h2>
                    
                </div>                    
            </div >
            {isConnected? 
                <Logsection/>: 
                <div className={style.login} id="logout" onClick={handleLogin}>
                    <h4 className={style.notconnected}>se connecter / s'inscrire <FontAwesomeIcon icon={faRightToBracket} /></h4>
                    
                    
                
                </div> 
                }
            
            
            {/* <div className={style.logout} id="logout">
                
            <img src={"http://localhost:8080/"+user.img} className={style.profilpic} alt="" />
                
                
                <h3>{user.pseudo}</h3>
                
                <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout}/>
            
            </div> */}
        </div>
    );
};

export default Nav;