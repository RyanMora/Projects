import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.store = configureStore();
  const root = document.getElementById('root');
  ReactDom.render(<h1>Welcome to BenchBnB</h1>, root);
});
