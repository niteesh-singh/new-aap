const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static(__dirname, './dist/heroku-app'));

ngApp.get('/*', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/heroku-app/index.html'));
});

ngApp.listen(process.env.PORT || 8080);