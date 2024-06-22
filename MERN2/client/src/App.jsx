import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Users from './components/Users/Users';
import NewPlace from './components/Place/NewPlace';
import MainHeader from './components/Header/MainHeader';

function App() {

  return (
    <BrowserRouter>
    <MainHeader/>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:id/places" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />}/>
          {/* <Route path="/blog/new" element={<NewPostPage />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
