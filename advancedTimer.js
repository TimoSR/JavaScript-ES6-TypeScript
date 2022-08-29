// Node.js program to demonstrate the
// console.timeLog() method

// Time started
console.time("totalExecutionTime");

// Time started
console.time("executionTime");

for (let i = 0; i < 10; i++) {

	// Printing execution time for each
	console.timeLog("executionTime");
}

// Printing total execution time
console.timeLog("totalExecutionTime");