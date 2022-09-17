import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUser, faRightFromBracket,faMusic, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import style from "./nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from '../../store/actions/auth-action';

const Nav = () => {
    const dispatch= useDispatch()

    const handleLogout = (e) =>{
        dispatch(logoutUser())

    }
    return (
        <div className={style.navbar}>
            <div className={style.navimg}>
                <img src="https://zupimages.net/up/22/37/rwxy.png" alt="" className={style.logo}/>
            </div>
            <div className={style.menu}>
                    <h2><div className={style.icon}><FontAwesomeIcon icon={faHouse} /></div></h2>
                    <h2><div className={style.icon}><FontAwesomeIcon icon={faMusic} /></div></h2>
                    <h2><div className={style.icon}><FontAwesomeIcon icon={faUserGroup} /></div></h2>                    
            </div >
            
            <div className={style.logout}>
                <FontAwesomeIcon icon={faUser} />
                
                <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout}/>
            </div>
        </div>
    );
};

export default Nav;