import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../utils/IsEmpty';
import { addFollow, unFollow } from '../../store/actions/user-action';
import { getUsers } from '../../store/actions/users-action';

const Follow = ({idToFollow}) => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const userId = useSelector(state => state.auth.userId)
    
    
    useEffect(()=> {
        console.log('yo!')
    },[user.follows.length])
    const handleFollow = ()=>{
        
        
        dispatch(addFollow({userId, idToFollow}))
        
        

    }
    const handleUnfollow = ()=>{
        dispatch(unFollow({userId, idToFollow}))
    }
    


    return (
        <div>
            
            {user && user.follows.includes(idToFollow) && (
            <span onClick={handleUnfollow}>
                <button>Unfollow</button>
            </span>
            )}
            {user &&!user.follows.includes(idToFollow) && (
            <span onClick={handleFollow}>
                <button>Follow</button>
            </span>
            )}
        </div>
    );
};

export default Follow;