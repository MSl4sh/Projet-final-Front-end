import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./profilform.module.css"
import { uploadProfil } from '../../store/actions/user-action';
import { faImage} from '@fortawesome/free-solid-svg-icons';



const Upload = () => {

    
    const [file, setFile] = useState()
    const dispatch = useDispatch()
    const user = useSelector(state=> state.auth.user)
    const isConnected = useSelector(state => state.auth.isConnected)
    

    useEffect(()=>{
        
        // axios.get("http://localhost:8080/api/user/"+userId).then(res =>{setUser(res.data)})
        

    },[isConnected])

    const handlePicture = (e) =>{
        e.preventDefault()
        const data= new FormData()
        data.append("name", user.pseudo)
        data.append("userId", user._id)
        data.append("file", file, "j'ai envie de crever.jpg")

        console.log(data);

        dispatch(uploadProfil(data))


    }
    
    return (
        <div className={style.uploadpic}>
            <form action="" onSubmit={handlePicture} >
                <label htmlFor="file" className={style.changepic}><FontAwesomeIcon icon={faImage} /> Changer d'image</label>
                <br />
                <input type="file" id='file' name='file' accept='.jpg, .jpeg, .png' onChange={(e) => setFile(e.target.files[0])}/>
                <br />
                <input type="submit" value="Envoyer"/>
            </form>
            
        </div>
    );
};

export default Upload;