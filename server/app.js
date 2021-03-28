const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;



app.use(bodyParser.urlencoded({extended: true}));



mongoose.connect("mongodb+srv://new_user31:shashi1967@buyexperts.wdiuq.mongodb.net/clientsData?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true})
.then(() => console.log('Database connected'))
.catch((err) => console.log(err));


app.get('/', routes);




app.listen(PORT, () => {
    console.log('App started successfully', PORT);
});

