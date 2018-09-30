const express = require('express')
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
// Log requests to the console.
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

require('./server/routes')(app);
app.get('/', (req, res) => res.render('pages/index'))



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))


module.exports = app;