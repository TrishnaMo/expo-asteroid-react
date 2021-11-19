import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AsteroidDetails from './pages/AsteroidDetails';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/asteriod-details/:asteriodId' component={AsteroidDetails} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;
