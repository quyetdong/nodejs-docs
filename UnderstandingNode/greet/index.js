let english = require('./english');
let spanish = require('./spanish');
let classmates = require('./classmates.json');
let english2 = require('./english');    //get cachedModule.exports;

module.exports = {
  english: english.english,
  spanish: spanish.spanish,
  classmates: classmates
}
