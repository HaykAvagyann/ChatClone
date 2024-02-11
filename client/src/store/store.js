import { configureStore } from "@reduxjs/toolkit";
import { usersDataReducer } from "./slices/usersData/usersDataSlice";
import { userIsAush } from "./middleware/usersData";

const store = configureStore({
    reducer: {
        usersData: usersDataReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), userIsAush],
});

export default store