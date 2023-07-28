import React from 'react';

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list"></ul>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li className="item" id={id} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        );
      })}
    </section>
  );
}
