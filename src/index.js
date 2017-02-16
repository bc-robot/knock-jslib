/**
 * Created by kevin on 17/2/16.
 */
var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-nams.json');

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
}