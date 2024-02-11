import { addNewUser, getCurrentUser, getUsersData, logOutUser } from "./API";

import { createSlice } from "@reduxjs/toolkit";

const usersDataSlice = createSlice({
    name: "usersData",
    initialState: { usersData: [], currentUser: {} },
    reducers: {
        login(state, { payload }) {
            return {
                ...state,
                currentUser: payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersData.fulfilled, (state, { payload }) => {
                return {
                    usersData: payload,
                    currentUser: null,
                };
            })
            .addCase(addNewUser.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    usersData: [...state.usersData, payload],
                };
            })
            .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    currentUser: payload,
                };
            })
            .addCase(logOutUser.fulfilled, (state, { payload }) => {
                return {
                    ...state,
                    currentUser: {},
                };
            });
    }
})

export const selectUsersData = (state) => state.usersData;
export const usersDataReducer    = usersDataSlice.reducer;
export const { login } = usersDataSlice.actions;