import React from 'react';

import './Countdown.scss';

const Countdown = () => (
  <main>
    <div className="value-container">
      <div className="box">
        <p>08</p>
      </div>
      <p className="label">DAYS</p>
    </div>
    <div className="value-container">
      <div className="box">
        <p>23</p>
      </div>
      <p className="label">HOURS</p>
    </div>
    <div className="value-container">
      <div className="box">
        <p>05</p>
      </div>
      <p className="label">MINUTES</p>
    </div>
    <div className="value-container">
      <div className="box">
        <p>45</p>
      </div>
      <p className="label">SECONDS</p>
    </div>
  </main>
);

export default Countdown;
