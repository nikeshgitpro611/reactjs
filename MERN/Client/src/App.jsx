import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/routePage/Home'
import SignIn from './components/routePage/SignIn'
import SignOut from './components/routePage/SignOut'
import About from './components/routePage/About'
import Profile from './components/routePage/Profile'
import Header from './components/Header/Header'
function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-out' element={<SignOut />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
