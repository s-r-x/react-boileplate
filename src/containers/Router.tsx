import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import IndexPage from '@/pages/home/container';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={IndexPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
