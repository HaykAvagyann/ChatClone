import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat/Chat";
import LoginRegistration from "../pages/Login&Registration/LoginRegistration";
import { useDispatch, useSelector } from "react-redux";
import { selectUsersData } from "../store/slices/usersData/usersDataSlice";
import { getCurrentUser, getUsersData } from "../store/slices/usersData/API";

function AppRouter() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(selectUsersData);
  useEffect(() => {
    dispatch(getUsersData());
    dispatch(getCurrentUser());
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={<LoginRegistration />}
      />
      {currentUser?.id ? (
        <Route
          path='Chat'
          element={<Chat />}
        />
      ) : (
        <Route
          path='Chat'
          element={<Navigate to={"/"} />}
        />
      )}
      {currentUser?.id ? (
        <Route
          path='ChoosenChat/:id'
          element={<Chat />}
        />
      ) : (
        <Route
          path='ChoosenChat/:id'
          element={<Navigate to={"/"} />}
        />
      )}
    </Routes>
  );
}

export default AppRouter;
