import { createReducer } from '@reduxjs/toolkit';
import { getPublications, postPublication } from '../actions/publications-action';


const initialState = {
    publications : null
};

const publicationsReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getPublications.fulfilled, (state, action) => {
        
        state.publications = action.payload;
            
    });
    
        
});

export default publicationsReducer;