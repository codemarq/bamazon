CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Products (
	`ItemID` INTEGER (11) NOT NULL AUTO_INCREMENT,
	`ProductName` VARCHAR (100) NOT NULL,
	`DepartmentName` VARCHAR(50) NOT NULL,
	`Price` DECIMAL (10, 2) NOT NULL,
	`StockQuantity` INTEGER (11) NOT NULL,
	PRIMARY KEY (`ItemID`)
);

SELECT * FROM Products;