import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import TransitionComponent from './components/Transition'
import { useLocation } from 'react-router'

export default function App() {
  const location = useLocation()
  const mainClass = location.pathname === '/' ? 'main-home' : 'main-general'

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Routes>
          <Route path = '/' element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }/>
          <Route path = '/login' element={
            <TransitionComponent>
              <Login />
            </TransitionComponent>
          }/>
          <Route path = '/register' element={
            <TransitionComponent>
              <Register />
            </TransitionComponent>
          }/>
          <Route path = '*' element={
            <TransitionComponent>
              <NotFound />
            </TransitionComponent>
          }/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}
