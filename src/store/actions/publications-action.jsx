import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPublications = createAsyncThunk("getPublications", async () => {
  const res = await axios.get("http://localhost:8080/api/publication");
  return res.data;
});
export const postPublication = createAsyncThunk(
  "publication/post",
  async (data) => {
    console.log(data);
    const res = await axios.post(
      "http://localhost:8080/api/publication",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  }
);
