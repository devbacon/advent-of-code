/*
  Key Notes:
    1. Arrays are essentially a list of indexed elements. The index count for
      arrays always starts at 0. This means that the array [5, 10, 15, 20] will
      be indexed [0, 1, 2, 3]
*/

export const runCode = function(fs) {
  // Read file from local system
  fs.readFile("2019/day_02/int_code.txt", (error, data) => {
    // If an error is detected, we throw an error and the process is stopped
    if (error) throw error;

    /* 
      Data will first be in the form of a file buffer. To convert this into 
      human readable content we convert it to a string
    */
    console.log(data.toString());

    /*
      TODO: Use the data to solve advent of code challenge
      (https://adventofcode.com/2019/day/2)
    */
    
  });
};