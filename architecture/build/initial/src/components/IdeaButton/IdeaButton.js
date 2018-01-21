import React from 'react';
import './IdeaButton.css';
import idea from './idea.svg';

export default function IdeaButton({ handleClick, message }) {
  return (
    <button
      className="idea-button"
      onClick={handleClick}
    >
      <img
        className="idea-button__icon"
        src={idea}
        alt="idea icon"
      />
      { message }
    </button>
  );
}
