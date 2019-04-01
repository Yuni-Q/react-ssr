import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initialDataDom = document.querySelector('#initial-data');
let data: string = '';
if (initialDataDom !== null) {
  const dataJson = initialDataDom.getAttribute('data-json');
  if (dataJson !== null) {
    data = dataJson;
  }
}

ReactDOM.render(
  <App>{data}</App>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();