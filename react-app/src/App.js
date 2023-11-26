import React from 'react';
import Navbar from './components/navigation_bar/Navbar';
import './App.css';
import Home from './components/navigation_bar/pages/navbar_button_pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quality from './components/navigation_bar/pages/navbar_button_pages/Quality';
import ContactUs from './components/navigation_bar/pages/navbar_button_pages/ContactUs';
import SignUp from './components/navigation_bar/pages/navbar_button_pages/SignUp';
import Build from './components/navigation_bar/pages/navbar_button_pages/Build';
import ManageVersions from './components/navigation_bar/pages/build_pages/ManageVersions';
import Database from './components/navigation_bar/pages/build_pages/Database';
import Chita from './components/navigation_bar/pages/build_pages/Chita';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/build' component={Build} />
        <Route path='/quality' component={Quality} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/manageversions' component={ManageVersions} />
        <Route path='/database' component={Database} />
        <Route path='/chita' component={Chita} />
      </Switch>
    </Router>
  );
}

export default App