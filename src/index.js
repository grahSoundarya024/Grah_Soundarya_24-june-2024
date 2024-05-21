import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux-config/store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='717237117721-is129qhdlmgflalr9lm5p2s897leleon.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
  </Provider>
);
//npm i @react-oauth/google

reportWebVitals();
