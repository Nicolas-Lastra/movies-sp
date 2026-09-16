import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import { useLocation } from 'react-router'

export default function App() {
  const location = useLocation()
  const mainClass = location.pathname === '/' ? 'main-home' : 'main-general'

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/login' element={<Login />}/>
          <Route path = '/register' element={<Register />}/>
          <Route path = '*' element={<NotFound />}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}
