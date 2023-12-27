import React from 'react';
import './styles/Header.scss';
import './styles/Footer.scss';
import './styles/Home.scss';
import './styles/Banner.scss';
import './styles/Logement.scss';
import './styles/About.scss';
import './styles/NotFound.scss';
import './styles/Carousel.scss';
import './styles/index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
