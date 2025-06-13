// Specify the NodeJS packages we need.
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Configure app to use bodyParser() and JSON, so we can easily get data from the HTTP body.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow CORS (i.e. cross-origin requests) for all requests, for simplicity.
app.use(cors());

// Get an instance of the express Router.
var router = express.Router();

// Our application data.
var urls = [
	'http://olsensoft.com/photos/bronnoysund.jpg',
	'http://olsensoft.com/photos/joburghadeda.jpg',
	'http://olsensoft.com/photos/alesund.jpg', 
	'http://olsensoft.com/photos/budapest.jpg',
	'http://olsensoft.com/photos/capetown.jpg', 
	'http://olsensoft.com/photos/cork.jpg',
	'http://olsensoft.com/photos/oslo.jpg',
	'http://olsensoft.com/photos/singapore.jpg'
]

// HTTP handler methods.
router.get('/thumbnailUrls', function (req, res) {
    setTimeout(function() {
        res.status(200).json(urls)
    }, 5000)
    return;
})

// For requests that have the /api prefix, use the router to route the request to the appropriate HTTP handler method above.
app.use('/api', router);

// Start listening on port 8080.
app.listen(8080);
console.log("ThumbnailUrls service listening at http://localhost:8080/api/thumbnailUrls");
