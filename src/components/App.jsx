import React from "react"
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Profile from "./Profile";
import Character from "./Character";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
  <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={
          <PrivateRoute>
            <Character />
          </PrivateRoute>
          }
        />
        <Route path="/Profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
      </Routes>
    </AuthProvider>
  </Router>
  )
}

export default App;
