import { createReducer } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../actions/auth-action';


const initialState = {
    isConnected: true,
    token: null,
    errorMsg: null,
    userId: null
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
                console.log(action.payload)
                state.isConnected = true;
                state.token = action.payload.token;
                state.errorMsg = null;
                state.userId= action.payload.user
                
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
            state.userId= null
        });
        
});

export default authReducer;