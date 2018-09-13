import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.body.style.margin = 0;
document.body.style.display = 'flex';
document.body.style['justify-content'] = 'center';

ReactDOM.render(<App />, document.body);
registerServiceWorker();