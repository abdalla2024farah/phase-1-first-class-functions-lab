// Code your solution in this file!
// Declare the variable returnFirstTwoDrivers with const
const returnFirstTwoDrivers = function(drivers) {
    // The assigned function takes one argument, an array of driver names
    // Return a new array containing the first two drivers
    return drivers.slice(0, 2);
};
// Declare the variable returnLastTwoDrivers with const
const returnLastTwoDrivers = function(drivers) {
    // The assigned function takes one argument, an array of driver names
    // Return a new array containing the last two drivers
    return drivers.slice(-2);
};
// 1. selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 2. createFareMultiplier
const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    };
};

// 3. fareDoubler
const fareDoubler = createFareMultiplier(2);

// 4. fareTripler
const fareTripler = createFareMultiplier(3);

// 5. selectDifferentDrivers
const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
};

// Example usage:
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// Selecting first two drivers
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Sally', 'Bob']

// Selecting last two drivers
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Freddy', 'Claudia']
