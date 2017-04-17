'use strict';

console.log('console');
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    console.log('production!');
    module.exports = require('./Root.prod');
} else {
    console.log('dev!');
    module.exports = require('./Root.dev');
}