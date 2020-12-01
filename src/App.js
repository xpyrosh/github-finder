import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import PropTypes from 'prop-types';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          {/* // JSX not HTML */}
          <div className="App">
            {/* Can pass props in like this:
            <Navbar title="Github Finder" icon='fab fa-github'></Navbar>*/}
            <Navbar/>
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search/>
                    <Users />
                  </Fragment>
                )}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/user/:login' component={User}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
  
}

App.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showUsers: PropTypes.bool.isRequired
};

export default App;
