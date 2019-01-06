require('rootpath')();
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('helpers/jwt');
const errorHandler = require('helpers/errorHandler');
const config = require('config.json');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./controllers/users/user.controller'));
app.use('/hotels',require('./controllers/hotels/hotel.controller'));
app.use('/coupons',require('./controllers/coupons/coupon.controller'));
app.use('/ads',require('./controllers/advertise/advertise.controller'));
app.use('/orders',require('./controllers/orders/order.controller'));

// Upload Files
app.use(fileUpload());
app.post('/uploads', function (req, res) {
    if (Object.keys(req.files).length == 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    var sampleFile = req.files.imageFile;

    // Use the mv() method to place the file somewhere on your server
    var fileName = 'fimg-'+Date.now()+'-'+sampleFile.name;
    sampleFile.mv('/var/www/html/upload-img/'+fileName, function (err) {
        if (err)
            return res.status(500).send(err);
        res.send({
            status: "success",
            type: sampleFile.mimetype,
            fileUrl: config.relativePath+fileName
        });
    });
});

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});