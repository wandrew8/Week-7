const Weather = require('../models/weather');
module.exports = {};

module.exports.findLocation = (location) => {
    return Weather.findOne({ name: location }).lean();
};
