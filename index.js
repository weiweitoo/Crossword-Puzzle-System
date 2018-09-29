const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

// Database
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://gjjptumrojrmhp:9e21795367be032a5ce71d04f215fdab8174d8ce8ed97ad1c358a38e17d71634@ec2-75-101-153-56.compute-1.amazonaws.com:5432/d1a7f3rs7ip697',
  ssl: true
});

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => res.render('pages/index'));
app.get('/cool', (req, res) => res.send(cool()));
app.get('/times', (req, res) => {
	  let result = ''
	  const times = process.env.TIMES || 5
	  for (i = 0; i < times; i++) {
	    result += i + ' '
	  }
	  res.send(result)
	});
app.get('/db', async (req, res) => {
	  try {
	    const client = await pool.connect()
	    const result = await client.query('SELECT * FROM test_table');
	    res.render('pages/db', {results:result.rows});
	    client.release();
	  } catch (err) {
	    console.error(err);
	    res.send("Error " + err);
	  }
	});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))