import { addCurrentUser } from "../slices/usersData/API";

export const userIsAush = (store) => (next) => (action) => {
    if (
        action.type === "usersData/login" &&
        store.getState().usersData.usersData.find((user) => user.password === action.payload.password && user.username === action.payload.username)
    ) {
        const currentUser = store
            .getState()
            .usersData.usersData.find((user) => user.password === action.payload.password && user.username === action.payload.username);
        action.payload = currentUser;
        store.dispatch(addCurrentUser(currentUser));
        return next(action);
    }

    if (
        action.type === "usersData/login" &&
        store.getState().usersData.usersData.find((user) => user.password !== action.payload.password || user.username !== action.payload.username)
    ) {
        return;
    }

    next(action);
};
