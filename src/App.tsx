import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppMenu from './AppMenu';

function App() {
  return (
    <div className="App">
      <AppMenu />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
