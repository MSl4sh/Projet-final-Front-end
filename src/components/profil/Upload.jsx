import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage} from '@fortawesome/free-solid-svg-icons';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./profilform.module.css"
import { uploadProfil } from '../../store/actions/user-action';



const Upload = () => {

    
    // const [file, setFile] = useState()
    const dispatch = useDispatch()
    const user = useSelector(state=> state.auth.user)
    const isConnected = useSelector(state => state.auth.isConnected)
    

    useEffect(()=>{
        
        // axios.get("http://localhost:8080/api/user/"+userId).then(res =>{setUser(res.data)})
        

    },[isConnected])

    const handlePicture = (file) =>{
        
        const data= new FormData()
        data.append("name", user.pseudo)
        data.append("userId", user._id)
        data.append("file", file)

        

        dispatch(uploadProfil(data))
        

    }
    
    return (
        <div className={style.uploadpic}>
            <form action="" >
                <label htmlFor="file" className={style.changepic}><FontAwesomeIcon icon={faImage} /> Changer d'image</label>
                <br />
                <input type="file" id='file' name='file' accept='.jpg, .jpeg, .png' onChange={(e) => handlePicture(e.target.files[0])}/>
                
                
            </form>
            
        </div>
    );
};

export default Upload;