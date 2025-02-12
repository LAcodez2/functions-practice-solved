// FUNCTIONS: arguments and return
// BEFORE YOU START: please read the /exercises-info/e2.md file.

/**
 * ====================================================
 * Create a function that works as follows:
   * The function name is 'rectArea'
   * The function returns the value of the area of a rectangle (sideA * sideB)
   * The function takes 2 parameters (two sides) to calculate the area from
 * rectArea(3, 2) => 6
*/
function rectArea(sideA, sideB) {
  return sideA * sideB;
}

// Your function code starts here...


// Use the function you created above to calculate the areas of 3 rooms
// Assign the results to room1, room2, and room3 variables
// Data for calculation: room1: 4 by 6, room2: 13 by 3, room3: 4 by 8

const room1Length = 4;
const room1Width = 6;
const room2Length = 13;
const room2Width = 3;
const room3Length = 4;
const room3Width = 8;
const room1 = rectArea(room1Length, room1Width);
const room2 = rectArea(room2Length, room2Width);
const room3 = rectArea(room3Length, room3Width);

  // Your code goes here:



/**
 * =============================================================
 * Create a function that works as follows:
 * The function name is 'totalRoomsArea'
 * The function takes 3 arguments (3 rooms area values)
 * The function returns the total area of 3 rooms
 * totalRoomsArea(area1, area2, area3) => Number
 * totalRoomsArea(24, 35, 24) => 83
 */

function totalRoomsArea(room1, room2, room3) {
  return room1 + room2 + room3;
}

// Your code goes here...


// Make the function call in the parentheses of the console.log statement.
// Use room1, room2, room3 variables as arguments for the function call
const result = function () {
    console.log(totalRoomsArea(room1, room2, room3));
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
    rectArea: rectArea || undefined,
    roomVars: [room1 || undefined, room2 || undefined, rectArea(room3Length, room3Width) || undefined],
    totalRoomsArea: totalRoomsArea || undefined,
    result: (room1 && room2 && rectArea(room3Length, room3Width)) ? result : undefined,
}
export { f };
