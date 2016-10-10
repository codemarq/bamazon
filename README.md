# Bamazon node.js app
Bamazon is a Node JS app which mimics an Amazon type of store.  This app is written in Node.JS and uses a local MySQL database.

## Technologies Used
* JavaScript
* Node.JS
* MySQL
* npm dependencies:
** inquirer
** mysql
** cli-table


## Screenshots

### Start:

user:~/bamazon$ node BamazonCustomer.js

###Unsuccessful purchase below: 

connected to bamazon as id 28
┌─────┬────────────────────┬──────────┐
│ ID  │ Product            │ Price    │
├─────┼────────────────────┼──────────┤
│ 1   │ Dell Inspiron i7   │ 1146.37  │
├─────┼────────────────────┼──────────┤
│ 2   │ Dell 2-in-1 7000 … │ 759.99   │
├─────┼────────────────────┼──────────┤
│ 3   │ Lenovo Y7000 GeFo… │ 1075.49  │
├─────┼────────────────────┼──────────┤
│ 4   │ Alienware FHD i7 … │ 1688     │
├─────┼────────────────────┼──────────┤
│ 5   │ MSI Ghost Pro-001  │ 1689.99  │
├─────┼────────────────────┼──────────┤
│ 6   │ Clean Code: a Han… │ 35.88    │
├─────┼────────────────────┼──────────┤
│ 7   │ DesignPatterns:El… │ 42.47    │
├─────┼────────────────────┼──────────┤
│ 8   │ Refactoring:Impro… │ 49.86    │
├─────┼────────────────────┼──────────┤
│ 9   │ Code Complete:A P… │ 38.42    │
├─────┼────────────────────┼──────────┤
│ 10  │ X-Men:Apocolypse … │ 19.99    │
└─────┴────────────────────┴──────────┘

? Which product ID number would you like to buy? 3
? How many units would you like to buy? 2
Not enough quantity in stock for your order.

### Successful order below:

┌─────┬────────────────────┬──────────┐
│ ID  │ Product            │ Price    │
├─────┼────────────────────┼──────────┤
│ 1   │ Dell Inspiron i7   │ 1146.37  │
├─────┼────────────────────┼──────────┤
│ 2   │ Dell 2-in-1 7000 … │ 759.99   │
├─────┼────────────────────┼──────────┤
│ 3   │ Lenovo Y7000 GeFo… │ 1075.49  │
├─────┼────────────────────┼──────────┤
│ 4   │ Alienware FHD i7 … │ 1688     │
├─────┼────────────────────┼──────────┤
│ 5   │ MSI Ghost Pro-001  │ 1689.99  │
├─────┼────────────────────┼──────────┤
│ 6   │ Clean Code: a Han… │ 35.88    │
├─────┼────────────────────┼──────────┤
│ 7   │ DesignPatterns:El… │ 42.47    │
├─────┼────────────────────┼──────────┤
│ 8   │ Refactoring:Impro… │ 49.86    │
├─────┼────────────────────┼──────────┤
│ 9   │ Code Complete:A P… │ 38.42    │
├─────┼────────────────────┼──────────┤
│ 10  │ X-Men:Apocolypse … │ 19.99    │
└─────┴────────────────────┴──────────┘
? Which product ID number would you like to buy? 3
? How many units would you like to buy? 1
Order successful! your total cost is $1075.49


## Built With
* SublimeText 3
* MySQL


## Author
John-Mike Marquardt @codemarq
:neckbeard: