import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './asset/font/Prompt-Regular.ttf'
import './asset/font/Prompt-Bold.ttf'
import './asset/font/Nunito-Regular.ttf'
import LoginPage from './pages/LoginPage';
import reportWebVitals from './reportWebVitals';
import Reporttest from './components/NewReport';
import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
