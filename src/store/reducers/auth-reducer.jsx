import { createReducer } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser, logoutUser, } from '../actions/auth-action';
import {userInfo, uploadProfil, updateBio, addFollow, unFollow } from '../actions/user-action';
import { getUsers } from '../actions/users-action';


const initialState = {
    isConnected: false,
    token: null,
    errorMsg: null,
    userId: null,
    user : null,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.isConnected =false;
                state.token = null;
                state.errorMsg = action.payload.errors;
                state.userId= null
            }
            else {
            state.isConnected = true;
            state.token = action.payload.token;      
            state.errorMsg = null;
            state.userId= action.payload.user
            state.user= action.payload
            }
            
            
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.isConnected =false;
                state.token = null;
                state.errorMsg = action.payload.errors;
                state.userId= null
                
            }
            else{
                state.isConnected = true;
                state.token = action.payload.token;
                state.errorMsg = null;
                state.userId= action.payload.user
                state.user= action.payload
                
            }
            
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isConnected =false;
            state.token = null;
            state.errorMsg = "raté poil au nez";
            state.userId= null
        })
        .addCase(logoutUser, (state, action) => {
            state.isConnected = false;
            state.token = null;
            state.errorMsg = null;
            state.userId= null;
            state.user= null
        })
        .addCase(userInfo.fulfilled, (state, action) => {
            console.log(action)
            state.user= action.payload
        })
        .addCase(uploadProfil.fulfilled, (state, action) => {
            state.user= action.payload
            
        })
        .addCase(updateBio.fulfilled, (state, action) => {
            state.user= action.payload
            
        })
        .addCase(addFollow.fulfilled, (state, action) => {
            
            state.user= action.payload
            
        })
        .addCase(unFollow.fulfilled, (state, action) => {
            
            state.user= action.payload
            
        })
        
        
});

export default authReducer;