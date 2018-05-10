import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUP/SignUpPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignUpPage />, document.getElementById('root'));
registerServiceWorker();
