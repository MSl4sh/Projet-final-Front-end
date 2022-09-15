import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
    "user/register",
    async (data, thunkAPI) => {
        const res = await axios.post(
            "http://localhost:8080/api/user/register",
            data
        );
        return res.data;
    }
);

export const loginUser = createAsyncThunk(
    "user/login",
    async (data, thunkAPI) => {
        const res = await axios.post("http://localhost:8080/api/user/login", data);
        return res.data.token;
        
        

    }
);

export const logoutUser = createAction("user/logout");
