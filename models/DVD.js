var sequelize = require('./../config/sequelize');
var Sequelize = require('sequelize');
var Validator = require('validatorjs');

var Dvd = sequelize.define('dvds', {
	title: {
		type: Sequelize.STRING,
		field: 'title'
	},
	award: {
		type: Sequelize.STRING,
		field: 'award'
	},
}, {
	timestamps: false
});

Dvd.validate = function(input) {
	return new Validator(input, {
		title: 'required',
		award: 'required'
	});
};

module.exports = Dvd;