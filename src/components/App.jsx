import React from "react"
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Character from "./Character";
import Login from "./Login";

function App() {
  return (
  <Router>
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Character />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </AuthProvider>
  </Router>
  )
}

export default App;
