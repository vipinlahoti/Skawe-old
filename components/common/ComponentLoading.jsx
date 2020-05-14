import Skawe from '@skawe';
import React from 'react';

const ComponentLoading = () => (
  <div className="loader">
    <style jsx>{`
      .loader {
        border: 3px solid #f3f3f3; /* Light grey */
        border-top: 3px solid #212529; /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
        margin: 60px auto;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
)

Skawe.registerComponent('ComponentLoading', ComponentLoading);
