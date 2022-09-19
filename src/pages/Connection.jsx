import React from 'react';
import Log from "../components/Log/Log"
import style from "../../src/pages/pages.module.css"



const Connection = () => {
    return (
        <div className={style.container}>
            <img src="https://zupimages.net/up/22/38/epj7.png" alt="" className={style.logo}/>
            <div className={style.connexion}>
                <div className='log-container'>
                    <Log login={false} register={true}/>
                </div>
            </div>
        </div>
    );
};

export default Connection;