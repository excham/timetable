const React = require('react');

const Routes = require('../../../routes');

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (React.createElement(
      'div',
      {className: '--App-container'},
      Routes
    ))
  }
}

module.exports = App;
