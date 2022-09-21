import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadProfil = createAsyncThunk(
    "user/upload",
    async (data) => {
        console.log(data)
        const res = await axios.post(
            "http://localhost:8080/api/user/upload",
            data,
            {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            }

        );
        return res.data;
        
    }
);

export const userInfo = createAsyncThunk(
    "user/userInfo",
    async (userId) => {
        console.log(userId);
        const res = await axios.get(
            "http://localhost:8080/api/user/"+userId
        );
        return res.data;
    }
)

export const updateBio = createAsyncThunk(
    "user/userBio",
    async (updatedBio) => {
        console.log(updatedBio.data)
        const data= {bio:updatedBio.data}
        const res = await axios.put(

            "http://localhost:8080/api/user/"+updatedBio.userId,
            data,
        );
        console.log(res)
        return res.data;

        
    }
)
export const addFollow = createAsyncThunk(
    "user/follow",
    async (userId, data) => {
        
        const res = await axios.patch(

            "http://localhost:8080/api/user/follow/"+userId,
            data,
        );
        console.log(res)
        return res.data;

        
    }
)
// export const unFollow = createAsyncThunk(
//     "user/follow",
//     async (updatedBio) => {
//         const data= {bio:updatedBio.data}
//         const res = await axios.patch(

//             "http://localhost:8080/api/user/unfollow"+userId,
//             data,
//         );
//         console.log(res)
//         return res.data;

        
//     }
// )