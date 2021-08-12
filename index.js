const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose')

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

// extract subpaages into layouts 
app.set('layout extractStyles', true)
app.set('layout extractScripts',true);


// use express router
app.use('/', require('./routes'));

// setting up view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');



// getting the port, if not showing error
app.listen(port, function(err) {
	if (err) {
		console.log(`Error in Running the Server ${err}`);
	}

	console.log(`Server running at port: ${port}`);
});
