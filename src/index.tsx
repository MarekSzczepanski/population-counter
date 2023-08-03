import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const r = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

r.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
