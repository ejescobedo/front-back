const db = require('../util/database');

module.exports = class Data {
  constructor(name, latitude, longitude, day, time, people) {
    this.name = name;
    this.latitude = latitude;
    this.longitude = longitude;
    this.day = day;
    this.time = time;
    this.people = people;
  }

  
  static showTable() {
    return db.execute('SELECT * FROM data');
  }

  static findByName(name) {
    return db.execute('SELECT * FROM data WHERE name = ?', [name]);
  }

  static findByDay(day) {
    return db.execute('SELECT * FROM data WHERE day = ?', [day]);
  }

  static findByTime(time) {
    return db.execute('SELECT * FROM data WHERE time = ?', [time]);
  }

  
};
