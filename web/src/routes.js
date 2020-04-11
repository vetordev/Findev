import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Search from './pages/Search';
import Solicitations from './pages/Solicitations';

export default function Routes() {
     return (
          <BrowserRouter>
               <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/search" component={Search} />
                    <Route path="/solicitations" component={Solicitations} />
               </Switch>
          </BrowserRouter>
     )
}