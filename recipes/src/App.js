import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register';
import { Recipes } from './components/Recipes';
import { Pantry } from './components/Pantry';
import { Friends } from './components/Friends/Friends';
import { Notifications } from './components/Notifications';
import { Profile } from './components/Profile';
import { Privacy } from './components/Privacy';
import { Home } from './components/Home';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <div className='app-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header loggedIn={isLoggedIn} logout={loginLogout} />}>
              <Route path='login' element={<Login login={loginLogout} />} />
              <Route path='register' element={<Register />} />
              <Route path='recipes' element={<Recipes />} />
              <Route path='pantry' element={<Pantry />} />
              <Route path='friends' element={<Friends />} />
              <Route path='notifications' element={<Notifications />} />
              <Route path='profile' element={<Profile />} />
              <Route path='privacy' element={<Privacy />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Home loggedIn={isLoggedIn}/>
      </div>
    </>
  );
}

export default App;
