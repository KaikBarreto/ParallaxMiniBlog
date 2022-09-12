import "./App.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import { AuthProvider } from "./context/AuthContext"
import { onAuthStateChanged } from "firebase/auth"

//  hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "./hooks/useAuthentication"

// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import CreatePost from "./pages/CreatePost"
import Dashboard from "./pages/Dashboard"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Search from "./pages/Search"
import Post from "./pages/Post"

function App() {
  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              {/* Qualquer um */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />

              {/* Autenticados */}
              <Route
                path="/posts/create"
                element={user ? <CreatePost /> : <Navigate to="/login" />}
              />
              <Route
                path="/dashboard"
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
