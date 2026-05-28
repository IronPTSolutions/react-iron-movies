import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import worker from './mock';
import './index.css';
import App from './App.jsx';

worker.start()
  .then(() => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <Router>
          <App />
        </Router>
      </StrictMode>,
    )
  }).catch((error) => console.error(error));

