var service = require('./services/pubs.service.js');

module.exports = {
    getAllPubs: service.getAllPubs,
    getPubsToday: service.getPubsToday
}