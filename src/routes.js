const React = require('react');
const ReactRouter = require('react-router');

const Home = require('./client/app/react/home');
const View = require('./client/app/react/view');

const NotFound = require('./client/app/react/notfound');


module.exports = React.createElement(
  ReactRouter.Router,
  {history: ReactRouter.browserHistory},
  React.createElement(
    ReactRouter.Route,
    {path: '/', component: Home}
  ),
  React.createElement(
    ReactRouter.Route,
    {path: '/view/:level', component: View}
  ),
  React.createElement(
    ReactRouter.Route,
    {path: '*', component: NotFound}
  )
)
