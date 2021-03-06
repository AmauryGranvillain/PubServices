const express = require('express');
const pubService = require('pub-services');
const app = express();
app.get('/pubs', function (req, res) {
    const pubs = pubService.getAllPubs();
    res.status(200).json();
})
const server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});