import React from 'react';
import logo from './logo.svg';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import ErrorBoundary from './ErrorBoundary';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBox />
        <ErrorBoundary>
          <CardList />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
