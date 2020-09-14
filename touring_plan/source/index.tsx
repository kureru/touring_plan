import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './css/index.css';

const App = () => {
  return <span>Hello from kintone CLI</span>;
};

(() => {
  const container = document.createElement('div');
  document.querySelector('body').append(container);
  ReactDOM.render(<App />, container);
})();
