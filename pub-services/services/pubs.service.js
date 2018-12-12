const moment = require('moment');
const json = require('../mocks/pubs.json');
const pubModel = require('../model/pubClass');

function getAllPubs(){
    return json.map(pub => {
        return new pubModel.Pub(pub.name,pub.openDays,pub.openHours,pub.owner,pub.beers);
    })
}

function getPubsToday(){
    return getAllPubs().filter(pub => pub.openDays.includes(moment().format('dddd')));
}

module.exports = {
    getAllPubs,
    getPubsToday
}