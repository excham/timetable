const React = require('react');
const ReactRouter = require('react-router');

const $ = require('jquery')
const moment = require('moment');


class View extends React.Component {
  constructor() {
    super()

    this.state = {
      times: []
    }
  }

  componentWillMount() {
    this.state = {
      times: JSON.parse(localStorage.getItem(this.props.params.level)) || []
    }

    console.log(1, JSON.parse(localStorage.getItem(this.props.params.level)));
  }

  componentDidMount() {
    console.log(this.state.times);
    if(this.state.times){
      $.get('/api/times', {level: this.props.params.level}, function (data) {
        this.setState({
          times: data
        })
        console.log(this.props);
        localStorage.setItem(this.props.params.level, JSON.stringify(data))
      }.bind(this))
    }
  }

  render() {
    return (React.createElement(
      'div',
      {className: '--view-container'},
      React.createElement(
        ReactRouter.Link,
        {to: '/'},
        React.createElement(
          'div',
          {className: 'card-panel'},
          React.createElement(
            'span',
            {className: 'flow-text'},
            '< Home'
          )
        )
      ),
      React.createElement(
        'div',
        {className: 'container'},
        React.createElement(
          'table',
          {},
          React.createElement(
            'thead',
            {},
            React.createElement(
              'tr',
              {},
              React.createElement(
                'td',
                {style: {width: '50%'}},
                'Morning (9:30 am)'
              ),
              React.createElement(
                'td',
                {style: {width: '50%'}},
                'Afternoon (2:00 pm)'
              )
            )
          ),
          Object.keys(this.state.times).map(function (e, i) {
            var date = moment(e, "DDMMMYY")
            var day = this.state.times[e]
            return React.createElement(
              'tbody',
              {key: e},
              React.createElement(
                'tr',
                {style: {fontWeight: 'bold'}},
                React.createElement(
                  'td',
                  {},
                  date.format("dddd")
                ),
                React.createElement(
                  'td',
                  {},
                  date.format("Do MMMM")
                )
              ),
              React.createElement(
                'tr',
                {},
                React.createElement(
                  'td',
                  {},
                  day[0]
                ),
                React.createElement(
                  'td',
                  {},
                  day[1]
                )
              )
            )
          }.bind(this))
        ),
        React.createElement(
          'br'
        ),
        React.createElement(
          'p',
          {},
          'Please arrive at least 30 minutes before your exam starts. All exams are three hours long. You can not leave within the first 45 last 15 minutes.'
        ),
        React.createElement(
          'br'
        )
      )
    ))
  }
}

module.exports = View;
