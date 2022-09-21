import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './userscard.module.css'
import { getUsers } from '../../store/actions/users-action';
import Follow from '../follow/Follow';



const UsersCard = () => {
    const users = useSelector(state=> state.users.users)
    const dispatch = useDispatch()
    
    
    useEffect(()=>{

        dispatch(getUsers())
        console.log(users)


    },[])
    return (
        <div className={style.userlist}>
            {users&&users.map((user) =>{
                for (let i =0; i<users.length;i++){
                    return(
                        <div className={style.card}>
                <div className={style.cardcontent}>
                    <div>
                        <img src={users?"http://localhost:8080/"+user.img:""} alt="" className={style.userimg}/>
                    </div>
                </div>
                    <div>
                        <p className={style.pseudo}>{users? user.pseudo:""}</p>
                    </div>
                    
                    <div>
                        <h4>{user? user.bio:""}</h4>
                    </div>
                <div>
                    <div className={style.follow}>
                        <Follow idToFollow={user._id}/>
                    </div>
                </div>
            </div>

                    )
                }
            })}



            
        </div>
    );
};

export default UsersCard;