import React from 'react';

import './App.css';
import IdeaButton from './components/IdeaButton/IdeaButton';
import Copyright from './components/Copyright/Copyright';

function logIdea() {
  console.log('Someone had an idea!');
}

export default function App() {
  return (
    <div className="main">
      <div className="app">
        <IdeaButton
          message="I have an idea!"
          handleClick={logIdea}
        />
      </div>
      <footer>
        <Copyright />
        <IdeaButton
          message="Footer idea!"
          handleClick={logIdea}
        />
      </footer>
    </div>
  );
}

