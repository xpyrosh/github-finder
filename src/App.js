import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends React.Component {

  // render is a life cycle method
  render() {
    return (
      // JSX not HTML
      <div className="App">
        {/* Can pass props in like this:
         <Navbar title="Github Finder" icon='fab fa-github'></Navbar>*/}
        <Navbar></Navbar>
        <h1>Hello from react</h1>
      </div>
    );
  }
}

export default App;
