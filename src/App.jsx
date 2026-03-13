import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import heroImg from './assets/bike-hero.png';
import offersImg from './assets/workshop.png';
import rentalImg from './assets/rent-bike.png';
import Header from './components/Header.jsx';
import ProductItem from './components/ProductItem.jsx';

function App() {
  return (  
    <>
      <Header />
      <ProductItem />
    </>
  );
}

export default App;