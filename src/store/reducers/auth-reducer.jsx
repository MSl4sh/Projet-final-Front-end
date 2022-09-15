import { createReducer } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../actions/auth-action';


const initialState = {
    isConnected: false,
    token: null,
    errorMsg: null
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.isConnected =false;
                state.token = null;
                state.errorMsg = action.payload.errors
            }
            else {
            state.isConnected = true;
            state.token = action.payload;      
            state.errorMsg = null;
            }
            
            
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.isConnected =false;
                state.token = null;
                state.errorMsg = action.payload.errors
            }
            else{
                console.log(action.payload)
                state.isConnected = true;
                state.token = action.payload.token;
                state.errorMsg = null;
            }
            
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isConnected =false;
            state.token = null;
            state.errorMsg = "raté poil au nez"
        })
        .addCase(logoutUser, (state, action) => {
            state.isConnected = false;
            state.token = null;
            state.errorMsg = null;
        });
        
});

export default authReducer;