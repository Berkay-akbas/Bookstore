import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookContainer from './components/BookContainer';
import Navbar from './components/Navbar';

import Categories from './components/Categories';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
