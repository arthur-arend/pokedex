import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/detail/:name" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;