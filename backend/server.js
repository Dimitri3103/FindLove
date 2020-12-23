let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

let dbConfig = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, { useNewUrlParser: true })
    .then(() => {
        console.log('Database connected successfully !');
    }, error => {
        console.log('Database connction error ! : ' + error);
    });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './uploads' });

app.use(cors());

const astuceRoute = require('./routes/astuce.route');
app.use('/api/astuces', astuceRoute);

const temoignageRoute = require('./routes/temoignage.route');
app.use('/api/temoignages', temoignageRoute);

app.post('/api/upload', multipartMiddleware, (req, res) => {
    res.json({
        'message': 'File uploaded successfully'
    });
});

// Create port
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})