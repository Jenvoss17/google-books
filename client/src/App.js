import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route name="index" exact path="/" component={Search} />
        <Route name="saved" exact path="/saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;