import React from 'react';
import BoxItem from './BoxItem';

import './Countdown.scss';

const Countdown = () => (
  <main>
    <BoxItem label="days" value="05" />
    <BoxItem label="hours" value="24" />
    <BoxItem label="minutes" value="53" />
    <BoxItem label="seconds" value="55" />
  </main>
);

export default Countdown;
