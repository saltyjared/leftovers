import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner" data-testid="loading-spinner">
    <svg className="spinner" viewBox="0 0 50 50" data-testid="spinner-svg">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  </div>
);

export default LoadingSpinner;
