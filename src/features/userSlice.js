import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newArr = [...state.users, action.payload.user];
      const sortedArr = newArr.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });

      return {
        ...state,
        users: sortedArr,
      };
    },
    editUser: (state, action) => {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.user.id ? action.payload.user : user
        ),
      };
    },
    deleteUser: (state, action) => ({
      ...state,
      users: state.users.filter((user) => user.id !== action.payload),
    }),
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
