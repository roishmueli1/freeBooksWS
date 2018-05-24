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
app.use('/', express.static('./'));
app.use('/include', express.static(`${__dirname}/public`));

var f = new free();

app.all('*', (req, res, next) => {
    next();
})
app.get('/', (req, res )=> {
    res.status(200).sendFile(`${__dirname}/index.html`);
});
app.get('/getAllFree', f.getAllFree);
app.post('/getFreeBooksByName/', f.getFreeBooksByName);
app.post('/getFreeBooksByDates/', f.getFreeBooksByDates);



app.listen(port,
    () => {
        console.log(`listening on port ${port}`);       
});
     