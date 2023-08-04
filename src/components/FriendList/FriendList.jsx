import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.item} id={id} key={id}>
            <span
              className={`${css.status} ${isOnline ? css.online : css.offline}`}
            ></span>
            <img src={avatar} alt="user avatar" width="32" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.array,
};
