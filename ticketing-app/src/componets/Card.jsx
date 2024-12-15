// UserCard.js
import React from 'react';

const UserCard = ({ firstName, lastName }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <div className="px-6 py-4">
      <h2 className="text-xl font-bold text-gray-900">{`${firstName} ${lastName}`}</h2>
      <p className="text-gray-700">Welcome to the event!</p>
    </div>
  </div>
);

export default UserCard;
