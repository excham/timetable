const React = require('react');


class notFound extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (React.createElement(
      'strong',
      {},
      '404!'
    ))
  }
}

module.exports = notFound;
