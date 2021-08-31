const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);



// extract subpaages into layouts 
app.set('layout extractStyles', true)
app.set('layout extractScripts',true);



// setting up view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');


app.use(session({
	name: 'CONVVEY',
	// TODO change secret before deployment into production mode
	secret: "something",
	resave: false,
	cookie: {
		maxAge: (1000 * 60 * 100)

	}
}));

app.use(passport.initialize());
app.use(passport.session());


// use express router
app.use('/', require('./routes'));


// getting the port, if not showing error
app.listen(port, function(err) {
	if (err) {
		console.log(`Error in Running the Server ${err}`);
	}

	console.log(`Server running at port: ${port}`);
});
