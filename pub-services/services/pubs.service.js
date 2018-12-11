var moment = require('moment');
var json = require('../mocks/pubs.json');

function getAllPubs(){
    json.forEach(pub => {
        console.log(pub.name);
    });
}

function getPubsToday(){  
    json.forEach(pub => {
       if(pub.openDays.includes(moment().format('dddd'))){
           console.log(pub.name);
       } 
    });
}

module.exports = {
    getAllPubs: getAllPubs,
    getPubsToday: getPubsToday
}