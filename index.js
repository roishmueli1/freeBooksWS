var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    free        = require('./data'),
    port        = process.env.PORT || 3000;

app.use(bodyParser.json()); //parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    res.set("Content-Type", "application/json");
    next();
});

var f = new free();

app.all('*', (req, res, next) => {
    //console.log('111');
    next();
})
app.get('/getAllFree', f.getAllFree);
app.post('/getFreeBooksByName/', f.getFreeBooksByName);
app.post('/getFreeBooksByDates/', f.getFreeBooksByDates);

app.get('/', (req, res )=> {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(port,
    () => {
        console.log(`listening on port ${port}`);       
});
     