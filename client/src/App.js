import React from 'react';
import './App.css';
import MainPage from './components/NavPages/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Settings from './components/NavPages/Settings';
import UserProfile from './components/NavPages/UserProfile';

import Mental from './components/NavPages/Mental'
import FoodWater from './components/NavPages/FoodWater'
import Physical from './components/NavPages/Physical'
import Student from './components/NavPages/Student'
import Utility from './components/NavPages/Utility';


import Login from './components/NavPages/Login';
import Signup from './components/NavPages/Signup';
import Breathe from './components/SpecificComponents/Breathe';

function App() {
  if (!JSON.parse(localStorage.getItem('authorization'))) {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/profile" exact component={UserProfile} />

            <Route path="/food-and-water" exact component={FoodWater} />
            <Route path="/physical" exact component={Physical} />
            <Route path="/mental" exact component={Mental} />
            <Route path="/student" exact component={Student} />
            <Route path="/utility" exact component={Utility} />

            <Route path="/breathe" exact component={Breathe} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
