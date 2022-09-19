import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import style from "./nav.module.css"
import { logoutUser } from '../../store/actions/auth-action';

const Logsection = () => {

    const dispatch= useDispatch()
    const userId = useSelector(state=> state.auth.userId)
    const user = useSelector(state => state.auth.user)
    const isConnected = useSelector(state => state.auth.isConnected)

   
    const handleLogout = (e) =>{
        dispatch(logoutUser())

    }
    return (
        <div className={style.logout} id="logout">
            <div className={style.userinfo}>
                <img src={"http://localhost:8080/"+user?.img} className={style.profilpic} alt="" />
                <h3>{user.pseudo}</h3>   
            </div>
            <div className={style.logouticon}>
            <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout}/>
            </div>   
            
        </div>
    );
};

export default Logsection;