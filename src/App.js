import React from 'react';
import './App.css';
import VoterData from './VoterData';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Philadelphia Qualified Voter Listing 2018</h1>
      </header>
      <main>
        <VoterData />
      </main>
      <footer>
      </footer>
    </div>
  );
}
