import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPublications } from '../../store/actions/publications-action';
import style from './publication.module.css'
import { dateParser } from '../utils/dateparser';
import { isEmpty } from '../utils/IsEmpty';
import { getUsers } from '../../store/actions/users-action';
import { postPublication } from '../../store/actions/publications-action';


const Publication = () => {
    const [publicationsLoaded, setPublicationsLoaded] = useState(true)
    const [publicationContent, setPublicationsContent] = useState("")
    const user = useSelector(state => state.auth.user)
    const publications = useSelector(state => state.publications.publications)
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    

    useEffect(() => {
        if (publicationsLoaded) {
            dispatch(getPublications())
            dispatch(getUsers())
            setPublicationsLoaded(false)
        }

        


    }, [publicationsLoaded])

    const handlePublication = async () =>{
        const data = new FormData() 
        data.append('posterId', user._id)
        data.append('message',publicationContent)
        console.log(publicationContent)
        await dispatch(postPublication(data))
        dispatch(getPublications())
    }
    const handleCancel = ()=>{
        setPublicationsContent("")
        document.getElementById("message").value='';
    }
    return (
        <div >
            {user&&
            <div className={style.publicationContainer}>
            <div className={style.publicationHeader}>
                <img src={"http://localhost:8080/"+user.img} alt="" className={style.posterimg}/>
                <div className={style.userheadertext}>
                <p className={style.userpseudo}>{user.pseudo}</p>
                </div>
                
            </div>
            <div className={style.publicationcontent}>
                    <textarea id="message" placeholder='Tapez votre message...' onChange={(e) => setPublicationsContent(e.target.value)}></textarea>
                    <div className={style.postbutton}>
                        {!publicationContent =="" ? <button onClick={handleCancel}>annuler</button>:null}
                        {!publicationContent =="" ? <button onClick={handlePublication}>poster</button>:null}
                    </div>
            </div>
            
            
        </div>}
            <div>
                {publications &&
                    publications.map((publication) => {
                        for (let i = 0; i < publications.length; i++) {
                            return <div className={style.publicationContainer}>
                                <div className={style.publicationHeader}>
                                    <img src={"http://localhost:8080/"+publication.posterId.img} alt="" className={style.posterimg}/>
                                    <div className={style.userheadertext}>
                                    <p className={style.userpseudo}>{publication.posterId.pseudo}</p>
                                    <p className={style.timestamp}>{dateParser(publication.createdAt)}</p>
                                    </div>
                                    
                                </div>
                                
                                <p className={style.publicationText}>{publication.message}</p>
                                <div className={style.publicationMedia}>
                                <img src={publication.picture} alt="" className={style.publicationimg}/>
                                </div>
                            </div>
                        }
                    })}
            </div>
        </div>
    );
};

export default Publication