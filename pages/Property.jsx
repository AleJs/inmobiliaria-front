import React from 'react';
import PropertyList from '../components/inmuebles/PropertyList/PropertyList';
import SearchBar from '../components/SearchBar/SearchBar';
import { NavigationBar } from '../components/navbar/Navbar';
import './propety.css';

import { Footer } from '../components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Property = () => {
  return (
    <div>
      {/* <NavigationBar /> */}
{/* 
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
      </BrowserRouter> */}


      <SearchBar />
      <PropertyList />
      <Footer />
    </div>
  );
};

export default Property;
