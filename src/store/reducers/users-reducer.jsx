import { createReducer } from '@reduxjs/toolkit';
import { getUsers } from '../actions/users-action';


const initialState = {
    users : null
};

const usersReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getUsers.fulfilled, (state, action) => {
        
        state.users = action.payload;
            
    });
    
        
});

export default usersReducer;