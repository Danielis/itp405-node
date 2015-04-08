var Sequelize = require('sequelize');

var sequelize = new Sequelize('dvd', 'student', 'ttrojan', {
	host: 'itp460.usc.edu',
	dialect: 'mysql'
});

module.exports = sequelize;