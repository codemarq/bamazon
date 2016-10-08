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



// connect to DB
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayTable();
})

function displayTable () {
	// call table constructor
	var table = new Table ({
		head: ['ID', 'Product', 'Department', 'Price', 'Quantity'],
		colWidths: [5, 20, 15, 10, 10]
	});

	// read all data from products table
	connection.query('SELECT * FROM Products', [{}], function(error, result) {
		if (error) throw error;

		for (var i = 0; i < result.length; i++) {
			// console.log("song: " + result[i].title);
			table.push([result[i].ItemID, result[i].ProductName, result[i].DepartmentName, result[i].Price, result[i].StockQuantity]);
		}
		console.log(table.toString());
	});
}

// update db function
function updateDB () {
	connection.query("UPDATE Products SET ? WHERE ?", [{
    	quantity: 100
	}, {
    	flavor: "Rocky Road"
	}], 	function(err, res) {});
};

// delete from db
function deleteItem () {
	connection.query("DELETE FROM Products WHERE ?", {
	    flavor: "strawberry"
	}, function(err, res) {});
};

// insert into db
function insertItem (product, department, price, quantity) {
	connection.query("INSERT INTO Products SET ?", {
	    ProductName: product,
	    DepartmentName: department,
	    Price: price,
	    StockQuantity: quantity
	}, function(err, res) {});
};

// select from db
function select () {
	connection.query('SELECT * FROM Products', function(err, res) {
	    if (err) throw err;
	    console.log(res);
	})
};