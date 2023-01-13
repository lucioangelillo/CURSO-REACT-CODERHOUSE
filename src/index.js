import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY89hxtfFWLsOulkjkHZbXiP6ZfWao4GE",
  authDomain: "dreamride-1bfc7.firebaseapp.com",
  projectId: "dreamride-1bfc7",
  storageBucket: "dreamride-1bfc7.appspot.com",
  messagingSenderId: "651717943743",
  appId: "1:651717943743:web:c66997ec722c6e8a0a010a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
