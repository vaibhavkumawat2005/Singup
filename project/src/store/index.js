import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    auth: authReducer,
  },
});

export default store;