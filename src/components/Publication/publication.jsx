import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPublications } from '../../store/actions/publications-action';
import style from './publication.module.css'
import { dateParser } from '../utils/dateparser';
import { isEmpty } from '../utils/IsEmpty';
import { getUsers } from '../../store/actions/users-action';
import { postPublication } from '../../store/actions/publications-action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faImage} from '@fortawesome/free-solid-svg-icons';


const Publication = () => {
    const [publicationsLoaded, setPublicationsLoaded] = useState(true)
    const [publicationContent, setPublicationsContent] = useState("")
    const [file, setFile] = useState()
    const [video, setVideo] = useState()
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
        handleVideo()
        


    }, [publicationsLoaded, publicationContent])
    const handlePicture = (e) =>{
        setFile(e.target.files[0])
        
        

    }
    const handleVideo = () =>{
        let findLink = publicationContent.split(' ');
        for(let i =0;i<findLink.length;i++){
            if(findLink[i].includes('https://www.yout')|| findLink[i].includes('https://yout')){
                let embed = findLink[i].replace('watch?v=','embed/');
                let yout =embed.split("&")
                setVideo(yout[0])

                console.log("avant",findLink)
                findLink.splice(i,1)
                console.log("apreès",findLink)
                console.log("hello",findLink.join(" "))
                console.log(i)
                const content = findLink.join(" ")
                setPublicationsContent(content) 
                // console.log(video)
                
                
            }
        }
        
    }

    const handlePublication = async () =>{
        
        const data = new FormData() 
        data.append('posterId', user._id)
        data.append('message',publicationContent)
        console.log("video", video)
        if(video){
            data.append('video', video)
            
        }
        if(file !=null){
            data.append('file',file)
        }
        console.log(video)
        dispatch(postPublication(data))
        dispatch(getPublications())
        handleCancel()
        setFile(null)
        setVideo(null)
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
                        {!publicationContent =="" ?
                        <label htmlFor="file" className={style.changepic}><FontAwesomeIcon icon={faImage} /><input type="file" id='file' name='file' accept='.jpg, .jpeg, .png' onChange={(e) =>handlePicture(e)}/></label>
                        :null}
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
                                {publication.video && (<iframe src={publication.video} frameborder="0"></iframe>)}
                                <img src={publication.picture} alt="" className={style.publicationimg}/>
                                </div>
                                {user && <div className={style.publicationFooter}>
                                    <div className="like">
                                        <p><FontAwesomeIcon icon={faHeart} /> {publication.likers.length}</p>
                                    </div>
                                    <div className="comment">
                                    <p><FontAwesomeIcon icon={faComment} /> {publication.likers.length}</p>

                                    </div>

                                </div>}
                                
                            </div>
                        }
                    })}
            </div>
        </div>
    );
};

export default Publication