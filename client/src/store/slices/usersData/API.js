import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../../hooks/UseRequest";

const { get, post, put } = UseRequest();
export const getUsersData = createAsyncThunk("usersData/getUsersData", async () => {
    const result = await get("http://localhost:5000/usersData");
    return result;
});

export const addNewUser = createAsyncThunk("usersData/addNewUser", async (data) => {
    const result = await post("http://localhost:5000/usersData", data);
    return result;
});

export const addCurrentUser = createAsyncThunk("usersData/addCurrentUser", async (data) => {
    const result = await put("http://localhost:5000/currentUser", data);
    return result;
});

export const getCurrentUser = createAsyncThunk("usersData/getCurrentUser", async () => {
    const result = await get("http://localhost:5000/currentUser");
    return result;
});

export const logOutUser = createAsyncThunk("usersData/logOutUser", async () => {
    const result = await put("http://localhost:5000/currentUser", {});
    return result;
});
