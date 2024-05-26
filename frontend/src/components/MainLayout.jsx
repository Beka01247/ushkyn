// src/components/MainLayout/MainLayout.jsx
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// import './mainLayout.css';

export default function MainLayout({ children }) {
  return (
    <div className='container-home'>
      <Header />
      <div className='container-centered'>
        {children}
      </div>
      <Footer />
    </div>
  );
}
