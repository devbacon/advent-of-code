// Import file system reading utility that is built into node
const fs = require('fs');

// Import Javascript modules and run their solution code
const moduleEquations = require('/2019/day_01/moduleEquations');
moduleEquations.runCode(fs);

const intCodeParser = require('/2019/day_02/intCodeParser');
intCodeParser.runCode(fs);

const centralPortCalc = require('/2019/day_03/centralPortCalc');
centralPortCalc.runCode(fs);