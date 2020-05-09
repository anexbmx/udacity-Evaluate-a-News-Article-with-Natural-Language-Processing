const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();
const app = express()

const textapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.use(express.static('dist'))


app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})

function checkForUrl(inputText) {
    return /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(inputText);
}

app.post('/data', function (req, res) {
    // check url in server-side
    if(!checkForUrl(req.body.url)) {
        return res.status(400).send({message: "URL must be a valid URL."}); 
    }
    textapi.sentiment({
        'url': req.body.url
    }, function (error, response) {
        if (error === null) {
            return res.send(response)
        }
        res.status(400).send({message: error.message});
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port ' + 8080 + '!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

module.exports = app;