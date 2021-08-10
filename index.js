const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error in Running the Server ${err}`);

    }

    console.log(`Server running at port: ${port}`);

})