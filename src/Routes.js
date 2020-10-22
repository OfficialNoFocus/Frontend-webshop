import React from 'react';
import { Route,Switch } from "react-router-dom";
import FrontPage from './views/FrontPage';
import Mickpage from './views/Mickpage';
import ProductPage from './views/products/ProductPage';
const Routes = () => (
    <Switch>
        {/* <Route exact component={FrontPage} path='/' /> */}
        <Route exact component={Mickpage} path='mick'/>
        <Route exact component={ProductPage} path='/' />
    </Switch>
  );

export default Routes;