//  dependencies
var mysql = require('mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');

// store connection variables
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '50Wookie$',
	database: 'bamazon'
});

// connect to DB and start bamazon store
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to bamazon as id " + connection.threadId);
    displayTable();
    // need a timeout here
    setTimeout(userPrompt, 1000);
})

// draw the table of items in bamazon store
function displayTable () {
	// call table constructor
	var table = new Table ({
		head: ['ID', 'Product', 'Price'],
		colWidths: [5, 20, 10]
	});

	// read all data from products table
	connection.query('SELECT * FROM Products', [{}], function(error, result) {
		if (error) throw error;

		for (var i = 0; i < result.length; i++) {
			// console.log("song: " + result[i].title);
			table.push([result[i].ItemID, result[i].ProductName, result[i].Price]);
		}
		console.log(table.toString());

	});
}

// prompt user after table load
function userPrompt () {
	inquirer.prompt([
		// which product?
	{
    	name: "ID",
    	type: "input",
    	message: "Which product ID number would you like to buy?"
    },
    {
    	name: "orderQuant",
    	type: "input",
    	message: "How many units would you like to buy?"
    }
    ]).then(function(answer) {
       connection.query('SELECT * FROM Products WHERE ?', [{ItemID: answer.ID}], function(error, result) {
		
		if (error) throw error;
		
		var stockQuant = result[0].StockQuantity;
		var orderQuant = answer.orderQuant;

		checkQuantity(answer.ID, answer.orderQuant, result[0].StockQuantity, result[0].Price);

		});
    });
};


function checkQuantity (id, order, stock, price) {
	if (order > stock) {
		console.log("Not enough quantity in stock for your order.");
		// return to main menu
		displayTable();
    	setTimeout(userPrompt, 1000);
	} else {
		connection.query("UPDATE Products SET ? WHERE ?", [{ItemID: id}, {StockQuantity: order}], function(err, res) {});

		console.log("Order successful! your total cost is $" + order * price);
	}
};