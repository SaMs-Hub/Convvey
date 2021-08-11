const express = require('express');
const app = express();
const port = 8000;

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
