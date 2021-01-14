let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();

//app.set('trust proxy', true);
app.use(cors());
app.use(bodyParser.json());

// if (process.env.NODE_ENV === 'production') {
//     //TODO:
// } else if (process.env.NODE_ENV === 'development') {

// } else if (process.env.NODE_ENV === 'local') {

// }

consign()
    .include('api')
    .then('routes')
    .into(app);

module.exports = app;