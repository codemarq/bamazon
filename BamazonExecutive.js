//  dependencies
var mysql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');

// store connection variables
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'bamazon'
});

// connect to DB and start bamazon store
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to bamazon as manager, id " + connection.threadId);
    // bring up manager menu
    userPrompt();
});

// draw the table of items in bamazon store
function displayTable (query) {
	// call table constructor
	var table = new Table ({
		head: ['DepartmentID', 'DepartmentName', 'OverheadCosts', "ProductSales", "TotalProfit"],
		colWidths: [5, 20, 10, 10, 10]
	});

	// read all data from products table
	connection.query(query, [{}], function(error, result) {
		if (error) throw error;

		for (var i = 0; i < result.length; i++) {
			// console.log("song: " + result[i].title);
			table.push([result[i].DepartmentID, result[i].DepartmentName, result[i].OverheadCosts, result[i].TotalProfit]);
		}
		console.log(table.toString());

	});
}

// prompt user after table load
function userPrompt () {
	inquirer.prompt([
		// which product?
	{
    	name: "menu",
    	type: "list",
    	message: "Welcome Big Boss. What would you like to do?",
    	choices: ["View Products Sales by Department", "Create New Department"]
    }
    ]).then(function(answer) {
       switch (answer.menu) {
       		case "View Products Sales by Department":
       			salesByDept();
       			break;
       		case "Create New Department":
       			createDept();
       			break;
       }
    });
}

// view sales by department
function salesByDept () {

};

// create a new department
function createDept () {

};