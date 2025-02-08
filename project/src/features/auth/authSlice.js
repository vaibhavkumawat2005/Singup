import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (serializedState === null) {
      return {
        user: null,
        error: null,
        isAuthenticated: false,
        users: []
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      user: null,
      error: null,
      isAuthenticated: false,
      users: []
    };
  }
};

const initialState = loadState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess: (state, action) => {
      const { name, email, password } = action.payload;
      if (state.users.find(user => user.email === email)) {
        state.error = 'User already exists!';
        state.isAuthenticated = false;
        return;
      }
      state.users.push({ name, email, password });
      state.user = { name, email };
      state.error = null;
      state.isAuthenticated = true;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    loginSuccess: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(u => u.email === email && u.password === password);
      if (user) {
        state.user = { name: user.name, email: user.email };
        state.error = null;
        state.isAuthenticated = true;
      } else {
        state.error = 'Invalid email or password';
        state.isAuthenticated = false;
      }
      localStorage.setItem('authState', JSON.stringify(state));
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.isAuthenticated = false;
      localStorage.setItem('authState', JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.isAuthenticated = false;
      localStorage.setItem('authState', JSON.stringify(state));
    }
  },
});

export const { signupSuccess, signupFailure, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;