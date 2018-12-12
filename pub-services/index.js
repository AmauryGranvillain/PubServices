var service = require('./services/pubs.service.js');

console.log(service.getAllPubs());
console.log(service.getPubsToday());

module.exports = {
    getAllPubs: service.getAllPubs,
    getPubsToday: service.getPubsToday
}