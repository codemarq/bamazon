//  dependencies
var sql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');

// store connection variables
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '50Wookie$',
	database: 'Bamazon'
});
