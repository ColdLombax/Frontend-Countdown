import React from 'react';

import './App.scss';

import Countdown from './components/Countdown';
import Links from './components/Links';

function App() {
  return (
    <div className="content">
      <header>
        <h1>WE&apos;RE LAUNCHING SOON</h1>
      </header>
      <Countdown />
      <Links />
    </div>
  );
}

export default App;
