import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';      // ✅ React component import karo
import './App.css';           // ✅ CSS file ko sirf import karo, component nahi

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
