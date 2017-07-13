const React = require('react');
const ReactRouter = require('react-router');


class Home extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (React.createElement(
      'div',
      {className: '--home-container container'},
      React.createElement(
        'h2',
        {},
        document.title
      ),
      React.createElement(
        ReactRouter.Link,
        {to: '/view/level-1'},
        React.createElement(
          'div',
          {className: 'card-panel'},
          React.createElement(
            'p',
            {className: 'flow-text'},
            'Level 1'
          )
        )
      ),
      React.createElement(
        ReactRouter.Link,
        {to: '/view/level-2'},
        React.createElement(
          'div',
          {className: 'card-panel'},
          React.createElement(
            'p',
            {className: 'flow-text'},
            'Level 2'
          )
        )
      ),
      React.createElement(
        ReactRouter.Link,
        {to: '/view/level-3'},
        React.createElement(
          'div',
          {className: 'card-panel'},
          React.createElement(
            'p',
            {className: 'flow-text'},
            'Level 3'
          )
        )
      ),
      React.createElement(
        ReactRouter.Link,
        {to: '/view/scholarship'},
        React.createElement(
          'div',
          {className: 'card-panel'},
          React.createElement(
            'p',
            {className: 'flow-text'},
            'Scholarship'
          )
        )
      ),
      React.createElement(
        'br'
      )
    ))
  }
}

module.exports = Home;
