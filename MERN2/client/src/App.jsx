import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Users from './components/Users/Users';
import NewPlace from './components/Place/NewPlace';
import MainHeader from './components/Header/MainHeader';
import UserPlace from './components/Place/UserPlace';
import UpdatePlace from './components/Place/UpdatePlace';
import { useCallback, useState } from 'react';
import Auth from './components/Users/Auth';
import { AuthContext } from './components/ContextApi/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="/places/new" element={<NewPlace />} />

        <Route path="/places/:placeId" element={<UpdatePlace />} />
      </Routes>
    )
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlace />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/places/:placeId" element={<UpdatePlace />} />
      </Routes>
    )
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout}}>
      <BrowserRouter>
        <MainHeader />
        <main>{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
