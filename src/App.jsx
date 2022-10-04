import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PRIVATE, LOGIN, REGISTER, LOGOUT, HOME, QUIENES } from '../routes/path';
import Login from '../components/usuario/Login';
import Register from '../components/usuario/Register';
import Home from '../pages/Home.jsx';
import PublicRoute from '../components/router/PublicRoute';
import PrivateRoute from '../components/router/PrivateRoute';
import { AuthContextProvider } from './../context/authContext';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';
import Property from './../pages/Property';
import { NavigationBar } from '../components/navbar/Navbar';
import QuienSomos from '../pages/QuienSomos';
import { Footer } from '../components/footer/Footer';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
      <NavigationBar/>
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
          <Route path={QUIENES} element={<QuienSomos/>}/>s

        </Routes>
        <Footer />

      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
