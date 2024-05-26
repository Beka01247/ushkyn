// src/routes/home/Home.jsx
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import Math_window from './math_window/math_window';
import Results_window from './results-window/results-window';
import SectionWindow from './sectionWindow/sectionWindow';
import './home.css';

export default function Home() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Math_window />} />
        <Route path="results" element={<Results_window />} />
        <Route path="section" element={<SectionWindow />} />
      </Routes>
    </MainLayout>
  );
}
