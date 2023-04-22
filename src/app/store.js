import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

const allMySliceReducersReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: allMySliceReducersReducer,
});
