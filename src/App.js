import React from 'react';
import './App.css';
import Summary from './Summary';
import DisplayTable from './DisplayTable';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Philadelphia Qualified Voter Listing 2018</h1>
      </header>
      <main>
        <Summary top="Female"/>
        <DisplayTable />
      </main>
      <footer>
      </footer>
    </div>
  );
}
