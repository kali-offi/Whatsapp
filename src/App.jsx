import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { auth } from './assets/firebase'
import LoginPage from './Components/LoginPage/LoginPage'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import Layout from './Components/Layout'
import { Data } from './assets/Data.js'

export const chatContext = createContext();
function App() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId] = useState(null)
  const selected = Data.find(m => m.id === selectedId)
  const location = useLocation()
  const isLoginPage = location.pathname === '/login';


  useEffect(() => {
    const unUser = onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In")
        navigate('/')
      } else {
        console.log("Logged Out");
        navigate('/login')
      }
    })
    return () => unUser()
  }, [])

  return (
    <>
      <chatContext.Provider value={{ selectedId, setSelectedId, selected }}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
        </Routes>
        {!isLoginPage && (
          <Layout />
        )}
      </chatContext.Provider>
    </>
  )
}

export default App
