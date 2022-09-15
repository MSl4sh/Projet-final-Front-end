import React, { useEffect } from 'react';
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import style from "../../src/pages/pages.module.css"

const Profil = () => {

    const isConnected = useSelector(state => state.auth.isConnected)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isConnected){
            navigate("/connection")
        }

    },[isConnected])

    return (
        <div className={style.profil}>
            Bonjour depuis profil
        </div>
    );
};

export default Profil;