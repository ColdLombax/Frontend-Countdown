import React from 'react';
import { number, string } from 'prop-types';

import './BoxItem.scss';

const BoxItem = ({ label, value }) => (
  <div className="value-container">
    <div className="box">
      <p>{value}</p>
    </div>
    <p className="label">{label.toUpperCase()}</p>
  </div>
);

export default BoxItem;

BoxItem.propTypes = {
  label: string.isRequired,
  value: number.isRequired,
};
