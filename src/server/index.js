var express = require('express');
var app = express();
var server = require('http').createServer(app);

var path = require('path')

var config = require('./config')
var examTimes = require('./exam_times')

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/favicon.ico', (req, res) => {res.end()})

app.get('/api/times', function (req, res) {
  res.json(examTimes[req.query.level])
})

app.get('*', function (req, res) {
  res.render('index', {title: 'NCEA Timetable ' + examTimes.year})
})

server.listen(config.port, function () {
  console.log("SERVER STARTED ON PORT " + config.port + "\n");
});
