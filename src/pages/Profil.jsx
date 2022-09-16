import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import style from "../../src/pages/pages.module.css"
import Nav from "../components/navbar/nav"


const Profil = () => {

    const isConnected = useSelector(state => state.auth.isConnected)
    const userId = useSelector(state=> state.auth.userId)
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    

    useEffect(()=>{
        if(!isConnected){
            navigate("/connection")
        }
        axios.get("http://localhost:8080/api/user/"+userId).then(res =>{setUser(res.data)})

    },[isConnected])

    return (
        <div>
            <div>
                {/* <img src={"http://localhost:8080/"+user.img} className={style.profilpic} alt="" /> */}
                <Nav/>
            </div>
            
            <div className={style.profil}>
                <h1>Profil de {user.pseudo}</h1> 
                
            </div>
        </div>
    );
};

export default Profil;