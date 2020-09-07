const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3001;

app.get('/',(req,res) => {
    res.send("Hello World2!");
});

 

app.listen(port,() => {
    console.log(`Server is Listening on Port: ${port}`)
})