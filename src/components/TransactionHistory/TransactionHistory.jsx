import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="row">Type</th>
          <th className="row">Amount</th>
          <th className="row">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className="row" id={id} key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.object,
};
