import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/base.css'
import App from './pages/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
