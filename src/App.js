import React from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users: [],
    loading: false
  }

  // lifestyle method
  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({users:res.data, loading:false});
  }

  // Search github users
  searchUsers = (text) => {
    console.log(text);
  };

  // render is a life cycle method
  render() {
    return (
      // JSX not HTML
      <div className="App">
        {/* Can pass props in like this:
         <Navbar title="Github Finder" icon='fab fa-github'></Navbar>*/}
        <Navbar/>
        <div className="container">
        <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/>
        <h1>Hello from react</h1>
        </div>
      </div>
    );
  }
}

export default App;
