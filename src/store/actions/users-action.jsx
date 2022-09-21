import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    "getusers",
    async () => {
        const res = await axios.get(
            "http://localhost:8080/api/user",
            
        );
        return res.data;
    }
)