const express = require('express')
const app = express()
const port = 3000
const scrapers = require('./scrapers');



app.use(express.json())

app.use(express.static('public'))



app.set('view enging', 'ejs');
// app.set('views', path.join(__dirname, '/views'))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
var i = 0;
app.post('/submit', async (req, res) => {
    const { formattedText } = req.body;
    console.log(req.body)
    const imdbScore = await scrapers.scrapeProduct(`https://www.google.com/search?q=${formattedText}`)
    console.log(imdbScore.rawTxt);
})

app.get('/', (req, res) => {
    res.render('home.ejs',);
    console.log('index works');
})





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})