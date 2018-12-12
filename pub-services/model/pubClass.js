class Pub {
    constructor (namepub, openDays, openHours, owner, beers){
        this.name = namepub;
        this.openDays = openDays;
        this.openHours = new OpenHours(openHours.start, openHours.end);
        this.owner = new Owner(owner.firstName, owner.lastName,owner.mail);
        this.beers = []
        beers.forEach(beer => 
            this.beers.push(new Beer(beer.type,beer.name))
        )
    }
}

class OpenHours{
    constructor(start,end){
        this.start = start;
        this.end = end;
    }
}

class Owner{
    constructor(firstname,lastname,mail){
        this.firstName = firstname;
        this.lastName = lastname;
        this.mail = mail;
    }
}

class Beer{
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}

module.exports = {
    Pub,
    OpenHours,
    Owner,
    Beer
}