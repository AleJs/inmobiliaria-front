import React from 'react';
import PropertyList from '../components/inmuebles/PropertyList/PropertyList';
import SearchBar from '../components/SearchBar/SearchBar';
import { NavigationBar } from '../components/navbar/Navbar';
import './propety.css';

import { Footer } from '../components/footer/Footer';

const Property = () => {
  return (
    <div>
      <NavigationBar />
      <SearchBar />
      <PropertyList />
      <Footer />
    </div>
  );
};

export default Property;
