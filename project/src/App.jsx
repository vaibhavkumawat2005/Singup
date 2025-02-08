import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import Counter from "./pages/Counter/Counter";
import Todolist from "./pages/Todo-list/Todolist";
import Signup from "./pages/Sign-Up/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signup" />} />
        <Route path="/counter" element={isAuthenticated ? <Counter /> : <Navigate to="/signup" />} />
        <Route path="/todolist" element={isAuthenticated ? <Todolist /> : <Navigate to="/signup" />} />
        <Route path="/" element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;