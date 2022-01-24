const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const adminRouter = require('./routes/admin');
const app = express(); // running express as function.

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname , 'public')));
// app.use(express.static(path.join(__dirname , 'js')));


app.get('/' , (req, res , next) => {
    console.log('3 miileware');
    res.send('<h3>This is express js example with simple route</h3>')
})
app.use('/admin' , adminRouter);
app.use((req, res , next) => {
    res.status(404).sendFile(path.join(__dirname , 'views' , '404.html'))
})

app.listen(3000);