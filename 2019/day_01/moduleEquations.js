/*
  Key Notes:
    1. Javascript has several data types, similar to most languages.
      The main ones that we are concerned with currently are string, 
      integer, and boolean.
    2. Logic gates and conditional logic are a primary part of software 
      development. These include things like if/else statements.
    3. Almost everything in Javascript is an object. Objects are data 
      structures with properties and methods. Properties are like 
      characteristics and methods are just functions.
    3. Functions can be declared or invoked. Declaring a function sets 
      it up and gets it ready to be used later. Invoking it is when it 
      actually gets used.
    4. Function can have parameters that arguments are passed into. 
      These are essentially extra peices of information that the function 
      may need to run the way you want it to.
*/


export const runCode = function(fs) {
  // Read file from local system
  fs.readFile("2019/day_01/module_masses.txt", (error, data) => {
    // If an error is detected, we throw an error and the process is stopped
    if (error) throw error;

    /* 
      Data will first be in the form of a file buffer. To convert this into 
      human readable content we convert it to a string
    */
    console.log(data.toString());

    /*
      TODO: Use the data to solve advent of code challenge
      (https://adventofcode.com/2019/day/1)
    */
    
  });
};
