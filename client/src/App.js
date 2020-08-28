import React from 'react';
import MainPage from './components/NavPages/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Navigation Pages
import Settings from './components/NavPages/Settings';
import UserProfile from './components/NavPages/UserProfile';
import Notifications from './components/NavPages/Notifications';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/notification" exact component={Notifications} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
