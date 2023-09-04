import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const r = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

r.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
