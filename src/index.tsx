import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Mount application to the root element in the index.html file
const root: HTMLElement = document.getElementById('root') as HTMLElement;

ReactDOM.render(<App />, root);
