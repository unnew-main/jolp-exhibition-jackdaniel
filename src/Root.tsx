import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Yun from './pages/yun/Main';

function Root() {
  return (
    <BrowserRouter>
      <Yun />
    </BrowserRouter>
  );
}

export default Root;
