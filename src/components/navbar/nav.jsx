import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import style from "./nav.module.css"

const Nav = () => {
    return (
        <div className={style.navbar}>
            <div className={style.navimg}>
                {/* <img src="" alt="" /> */}
                image
            </div>
            <div className={style.menu}>
                    <h2><div className={style.icon}><FontAwesomeIcon icon={faHouse} /></div> Home</h2>
                    <h2><div className={style.icon}><FontAwesomeIcon icon={faUser} /></div> Profil</h2>
                    
            </div>
            <div className={style.logout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
        </div>
    );
};

export default Nav;