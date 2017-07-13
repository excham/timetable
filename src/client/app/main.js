const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./react/app');


ReactDOM.render(
  React.createElement(
    App
  ),
  document.getElementById('app')
)
