import React from 'react';

const ListItem = ({ title, nick, date }) => {
  return (
    <div className="flex items-center justify-start gap-4 px-4 py-2 border-b">
      <div className="flex-shrink-0">
        <div className="text-3xl">📄</div>
      </div>
      <div className="flex-grow">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-sm text-gray-600">{nick}</div>
      </div>
      <div className="font-medium text-md whitespace-nowrap">{date}</div>
    </div>
  );
};

export default ListItem;
