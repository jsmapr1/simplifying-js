import React from 'react';

export default function CopyrightStatement() {
  const year = new Date().getFullYear();
  return (
    <div className="copyright">
      Copyright {year}
    </div>
  );
}
