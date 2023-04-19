import React from 'react';

const DeleteButton = ({ id, onDelete }) => {
  const handleClick = async () => {
    await onDelete(id);
  };

  return (
    <button className="tableDeliteButton" onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButton;