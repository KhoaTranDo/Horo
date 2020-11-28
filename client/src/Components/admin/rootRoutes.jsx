import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './dashboard';
import SideBar from './sidebar';

export default class rootRoutes extends Component {
  render() {
    const { match } = this.props;
    return (
      <main>
        
        <div id="layoutSidenav">
          <SideBar />
          <Switch>
            <Route exact path={[`${match.path}/home`, `${match.path}`]} component={Home} />
          </Switch>
        </div>
      </main>
    );
  }
}