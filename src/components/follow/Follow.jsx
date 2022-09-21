import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../utils/IsEmpty';

const Follow = ({idToFollow}) => {

    const user = useSelector(state => state.auth.user)
    
    

    const handleFollow = ()=>{

    }
    const handleUnfollow = ()=>{
        
    }
    


    return (
        <div>
            
            {user && user.follows.includes(idToFollow) && (
            <span>
                <button>Unfollow</button>
            </span>
            )}
            {user &&!user.follows.includes(idToFollow) && (
            <span>
                <button>Follow</button>
            </span>
            )}
        </div>
    );
};

export default Follow;