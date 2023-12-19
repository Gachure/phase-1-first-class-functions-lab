// Code your solution in this file!
// index.js

// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Function to return the last two drivers
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Array of driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function to create a fare multiplier
  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  // Functions to double and triple fares
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers based on a provided function
  function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
  }
  
  // Export functions if needed
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
  };
  