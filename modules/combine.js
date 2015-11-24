var randomNumber = require('./random.js');
var toDollars = require('./todollars.js');

var third = {
	thing1: "Account balance: \n", 
	thing2: function () {
		return toDollars.dollars(randomNumber.returnRand(100,1000000));
	}
};

module.exports = third;
