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
const MongoStore = require('connect-mongo')(session);
const sassMiddleware = require('node-sass-middleware');
const flash = require('connect-flash');
const customMware = require('./config/middleware');

app.use(sassMiddleware ({
	src: './assets/scss',
	dest: './assets/css',
	debug: true,
	outputStyle: 'extended',
	prefix: '/css'

}));
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(expressLayouts);



// extract subpaages into layouts 
app.set('layout extractStyles', true)
app.set('layout extractScripts',true);



// setting up view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// monog store is used to store session cookie
app.use(session({
	name: 'CONVVEY',
	// TODO change secret before deployment into production mode
	secret: "something",
	saveUninitialized: false,
	resave: false,
	cookie: {
		maxAge: (1000 * 60 * 100)

	},
	store: new MongoStore({
		mongooseConnection: db,
		autoRemove: 'disabled'
	})
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

// use express router
app.use('/', require('./routes'));


// getting the port, if not showing error
app.listen(port, function(err) {
	if (err) {
		console.log(`Error in Running the Server ${err}`);
	}

	console.log(`Server running at port: ${port}`);
});
