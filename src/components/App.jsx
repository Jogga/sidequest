import React from "react"
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Profile from "./Profile";
import CharacterPage from "./CharacterPage";
import CharacterUpdatePage from "./CharacterUpdatePage";
import CharactersPage from "./CharactersPage";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import PartyPage from "./PartyPage";
import Parties from "./Parties";
import Home from "./Home";
import GlobalStyle from "../globalStyles";

function App() {
  return (
    <>
    <GlobalStyle />
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
            }
          />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
            }
          />
          <Route path="/parties" element={
            <PrivateRoute>
              <Parties />
            </PrivateRoute>
            }
          />
          <Route path="parties/:partyId" element={
            <PrivateRoute>
              <PartyPage />
            </PrivateRoute>
            }
          />
          <Route path="/characters" element={
            <PrivateRoute>
              <CharactersPage />
            </PrivateRoute>
            }
          />
          <Route path="characters/:characterId" element={
            <PrivateRoute>
              <CharacterPage />
            </PrivateRoute>
            }
          />
          <Route path="characters/:characterId/update" element={
            <PrivateRoute>
              <CharacterUpdatePage />
            </PrivateRoute>
            }
          />
          <Route path="parties/:partyId/:characterId" element={
            <PrivateRoute>
              <CharacterPage />
            </PrivateRoute>
            }
          />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
        </Routes>
      </AuthProvider>
    </Router>
  </>
  )
}

export default App;
