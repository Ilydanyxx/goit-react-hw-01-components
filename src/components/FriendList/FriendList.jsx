import React from 'react';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className="item" id={id} key={id}>
            <span className="status" isOnline={isOnline}></span>
            <img src={avatar} alt="user avatar" width="32" />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
