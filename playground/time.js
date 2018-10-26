let moment = require('moment');

let date = moment();
date.add(1, 'year');
console.log(date.format('ddd MMMM Do YYYY, h:mm:ss a Z'));
console.log(date.format('MMMM Do YYYY, h:mm:ss a'));

console.log(date.format('h:mm a'));

let someTimestamp = moment().valueOf();

let createdAt = 1234;
let date2 = moment(createdAt);
console.log(date2.format('h:mm a'));
