import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "get users",
    async () => {
        console.log(userId);
        const res = await axios.get(
            "http://localhost:8080/api/user/"
        );
        return res.data;
    }
)