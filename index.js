const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Log requests to the console.
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

require('./server/routes')(app);
app.get('/', (req, res) => res.render('pages/index'))
app.get('/times', (req, res) => {
	  let result = ''
	  const times = process.env.TIMES || 5
	  for (i = 0; i < times; i++) {
	    result += i + ' '
	  }
	  res.send(result)
	});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))






module.exports = app;