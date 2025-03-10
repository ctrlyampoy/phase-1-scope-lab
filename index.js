// Declare a global variable customerName
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';  // Declaring bestCustomer in global scope
}

// Function to change bestCustomer to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';  // Changing the global variable bestCustomer
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'initial value';

// Function to attempt to change leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value';  // This will throw an error
}

// Resetting customerName after tests to ensure it's 'bob'
function resetCustomerName() {
    customerName = 'bob';
}

// Demonstrate the functions
console.log('Initial customerName:', customerName);
upperCaseCustomerName();
console.log('Uppercased customerName:', customerName);
resetCustomerName();  // Reset customerName after test

setBestCustomer();
console.log('Best customer:', bestCustomer);

overwriteBestCustomer();
console.log('Overwritten best customer:', bestCustomer);

console.log('Least favorite customer:', leastFavoriteCustomer);
