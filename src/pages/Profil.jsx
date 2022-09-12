import React from 'react';
import Log from "../components/Log/Log"

const Profil = () => {
    return (
        <div className='profil'>
            <div className='log-container'>
                <Log login={false} register={true}/>
            </div>
        </div>
    );
};

export default Profil;