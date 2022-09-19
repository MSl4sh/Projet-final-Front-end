import React, { useEffect, useState } from 'react';
import style from "./profilform.module.css"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Upload from './Upload';
import { updateBio } from '../../store/actions/user-action';
import { dateParser } from '../utils/dateparser';

const Profilform = () => {
    const [bio, setBio] = useState('')
    const [updateForm, setUpdateForm] = useState(false)
    const userId = useSelector(state => state.auth.userId)
    const user = useSelector(state => state.auth.user)
    const isConnected = useSelector(state => state.auth.isConnected)
    const dispatch = useDispatch()

    // useEffect(()=>{

    //     console.log("jello")


    // },[user.img])

    const handleBio = () => {
        const data = bio
        console.log(data)


        dispatch(updateBio({ userId, data }))
        setUpdateForm(false)
    };

    return (
        <div className={style.blockprofil}>
            <div className={style.profilform}>

                <div className={style.profilpic}>
                    <img src={"http://localhost:8080/" + user?.img} className={style.profilpic} alt="" />

                </div>
            </div>
            <div className={style.upload}>
                <Upload />
            </div>
            <div className={style.infouser}>
                <div className={style.bio}>
                    <h3>Bio</h3>
                    {updateForm === false && (
                        <>
                            <p onClick={() => setUpdateForm(true)}>{user.bio}</p>
                            
                        </>
                    )}
                    {updateForm && (
                        <>
                            <textarea type='text' defaultValue={user.bio} name="" id="" cols="60" rows="5" onChange={(e) => setBio(e.target.value)}></textarea>
                            <button onClick={handleBio}>Valider les modifications</button>
                        </>
                    )}
                </div>

            </div>
            <div className={style.count}>
                <div>
                    <p>Likes</p>
                    <p>{user.like?user.like.length:""}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{user.followers?user.followers.length:""}</p>
                </div>
                <div>
                    <p>Follows</p>
                    <p>{user.follows?user.follows.length:""}</p>
                </div>
            </div>
            <div className={style.member}>
                <p>Membre depuis le {dateParser(user.createdAt)}</p>
            </div>
        </div>
    );
};

export default Profilform;