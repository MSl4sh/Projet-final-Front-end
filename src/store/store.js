import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth-reducer';
import publicationsReducer from './reducers/publications-reducer';
import usersReducer from './reducers/users-reducer'



const store = configureStore({
    reducer: {
        auth: authReducer,
        users: usersReducer,
        publications : publicationsReducer

    },

});

export default store;