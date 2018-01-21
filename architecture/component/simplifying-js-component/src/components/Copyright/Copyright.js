import React from 'react';
import './Copyright.css';

export default function CopyrightStatement() {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      Copyright {year}
    </div>
  );
}
