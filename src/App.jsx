<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PRIVATE, LOGIN, REGISTER, LOGOUT, HOME, LISTPROPERTY } from '../routes/path';
import Login from '../components/usuario/Login';
import Register from '../components/usuario/Register';
import Home from '../pages/Home.jsx';
import PublicRoute from '../components/router/PublicRoute';
import PrivateRoute from '../components/router/PrivateRoute';
import { AuthContextProvider } from './../context/authContext';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';
import Property from './../pages/Property';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<PublicRoute />}>
            <Route index element={<Property />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
      
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Profile />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
        

        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
>>>>>>> dev
