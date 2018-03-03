import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App.js';
import Hello from './Hello.js';
import 'tachyons'; //access to tachyons package similar to bootstrap
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greeting = {'Hello'+'React Ninja'}/>, document.getElementById('root'));
registerServiceWorker();
