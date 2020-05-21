import React from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import Gallery from './containers/Gallery'
import Contact from './containers/Contact'

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/About' component={About} />
        <Route path='/Gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);