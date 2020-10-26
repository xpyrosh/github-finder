import React from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import './App.css';

class App extends React.Component {

  // render is a life cycle method
  render() {
    return (
      // JSX not HTML
      <div className="App">
        {/* Can pass props in like this:
         <Navbar title="Github Finder" icon='fab fa-github'></Navbar>*/}
        <Navbar/>
        <div className="container">
        <Users/>
        <h1>Hello from react</h1>
        </div>
      </div>
    );
  }
}

export default App;
