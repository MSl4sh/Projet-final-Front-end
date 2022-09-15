import React from 'react';
import Log from "../components/Log/Log"
import style from "../../src/pages/pages.module.css"

const Connection = () => {
    return (
        <div className={style.profil}>
            <div className='log-container'>
                <Log login={false} register={true}/>
            </div>
        </div>
    );
};

export default Connection;