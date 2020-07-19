import React, { Component } from 'react';
import logo from './logo.svg';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import ErrorBoundary from './ErrorBoundary';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: []
    }
  }

  fetchProfiles = async () => {
    try {
        const fetchedJson = await fetch('https://jsonplaceholder.typicode.com/users');
        const profiles = await fetchedJson.json();
        this.setState({ users: profiles, filteredUsers: profiles });
    } catch (error) {
        console.log('Failed to fetch');
    }
  }

  handleSearchChange = (event) => {
    this.setState({ filteredUsers: event});
  }

  componentDidMount() {
    this.fetchProfiles();
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBox users={this.state.users} onSearchChange={this.handleSearchChange}/>
          <ErrorBoundary>
            <CardList users={this.state.filteredUsers}/>
          </ErrorBoundary>
        </header>
      </div>
    );
  }
}

export default App;
