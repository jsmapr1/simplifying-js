import React from 'react';

import './App.css';
import Copyright from './components/Copyright/Copyright';

export default function App() {
  return (
    <div className="main">
      <div className="app" />
      <footer>
        <Copyright />
      </footer>
    </div>
  );
}

