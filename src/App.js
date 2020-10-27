import React from 'react';
import Navbar from './components/layout/Navbar';
// import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showUsers: PropTypes.bool.isRequired
  };

  // lifestyle method
  async componentDidMount() {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/users?&client_id${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({users:res.data, loading:false});
  }

  // Search github users
  searchUsers = async text => {
    this.setState({loading: true});

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading:false });
  };

  // Clear users from state
  clearUsers = () => this.setState({
    users:[],
    loading: false
  });

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg: msg, type: type }});

    setTimeout(() => this.setState({alert: null}), 5000);
  };

  // render is a life cycle method
  render() {
    const { users, loading } = this.state;

    return (
      // JSX not HTML
      <div className="App">
        {/* Can pass props in like this:
         <Navbar title="Github Finder" icon='fab fa-github'></Navbar>*/}
        <Navbar/>
        <div className="container">
          <Alert alert={this.state.alert}/>
        <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers} 
          showClear={users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />
        <Users loading={loading} users={users}/>
        <h1>Hello from react</h1>
        </div>
      </div>
    );
  }
}

export default App;
