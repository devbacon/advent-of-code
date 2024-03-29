/*
  Key Notes:
    1. 
*/

export const runCode = function(fs) {
  // Read file from local system
  fs.readFile("/2019/day_03/wire_paths.txt", (error, data) => {
    // If an error is detected, we throw an error and the process is stopped
    if (error) throw error;

    /* 
      Data will first be in the form of a file buffer. To convert this into 
      human readable content we convert it to a string
    */
    console.log(data.toString());

    /*
      TODO: Use the data to solve advent of code challenge
      (https://adventofcode.com/2019/day/3)
    */
  });
};
