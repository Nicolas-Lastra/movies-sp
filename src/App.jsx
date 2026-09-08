import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export default function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/login' element={<Login />}/>
          <Route path = '*' element={<NotFound />}/>
        </Routes>
        <Footer />
      </main>
    </>
  )
}
