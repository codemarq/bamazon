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
		head: ['ID', 'Product', 'Price', "Quantity"],
		colWidths: [5, 20, 10, 8]
	});

	// read all data from products table
	connection.query(query, [{}], function(error, result) {
		if (error) throw error;

		for (var i = 0; i < result.length; i++) {
			// console.log("song: " + result[i].title);
			table.push([result[i].ItemID, result[i].ProductName, result[i].Price, result[i].StockQuantity]);
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
    	message: "Welcome Manager. What would you like to do?",
    	choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }
    ]).then(function(answer) {
       switch (answer.menu) {
       		case "View Products for Sale":
       			viewProducts();
       			break;
       		case "View Low Inventory":
       			viewLowInventory();
       			break;
       		case "Add to Inventory":
       			addToInventory();
       			break;
       		case "Add New Product":
       			addNewProd();
       			break;
       }
    });
}

// view all products for sale
function viewProducts () {
	var querySale = 'SELECT * FROM Products';
	displayTable(querySale);
	setTimeout(userPrompt, 1000);
}

// view the low inventory products
function viewLowInventory () {
	var queryLow = 'SELECT * FROM Products WHERE StockQuantity <5';
	displayTable(queryLow);
	setTimeout(userPrompt, 1000);
}

// increase inventory of a product
function addToInventory () {
	// display total inventory table
	var total = 'SELECT * FROM Products';
	displayTable(total);
	setTimeout(addPrompts, 1000);	
}

// function to inquire for adds
function addPrompts () {

	// prompt user for which item and quantity to update
	inquirer.prompt([
		// which product?
	{
    	name: "ID",
    	type: "input",
    	message: "Which product's inventory would you like to increase?"
    },
    {
    	name: "addQuant",
    	type: "input",
    	message: "How many units would you like to add?"
    }
    ]).then(function(answer) {
    	var newQuant;
    	connection.query('SELECT * FROM Products WHERE ?', [{ItemID: answer.ID}], function(err, res) {
    		newQuant = parseFloat(res[0].StockQuantity) + parseFloat(answer.addQuant);
    	});

    	setTimeout(function() {
    		connection.query('UPDATE Products SET ? WHERE ?', [{StockQuantity: newQuant}, {ItemID: answer.ID}], function(error, result) {
			if (error) throw error;
			console.log("Successfully updated inventory of ItemID " + answer.ID + " with " + answer.addQuant + " more units.");
			});
			// display table with new values
    		displayTable('SELECT * FROM Products');

			setTimeout(userPrompt, 1000);
    	}, 1000);
    });
}

// add new products to inventory
function addNewProd (productName, departmentName, price, stock) {
	connection.query('INSERT INTO Products (ProductName, DepartmentName, Price, StockQuantity) VALUES (?)', [this.productName, this.departmentName, this.price, this.StockQuantity] function(error, result) {
		if (error) throw error;
		displayTable('SELECT * FROM Products');
	});p
}