import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Top from '../components/Top';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;