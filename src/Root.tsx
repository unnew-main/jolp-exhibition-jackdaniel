import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Yun from './pages/yun/Main';

function Root() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Yun} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
