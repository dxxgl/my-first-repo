const BASE_NUMBER = 9;

// Problem 1: Grade Calculator
function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

// Problem 2: Star Pattern
function showStars(rows) {
    console.log(`Star Pattern (${rows} rows):`);
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
    console.log(); // Empty line for spacing
}

// Problem 3: Prime Number Checker
function isPrime(n) {
    // Handle edge cases
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    
    // Check for factors from 5 onwards
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

// Problem 4: Multiplication Table
function multiplicationTable(n) {
    console.log(`Multiplication Table for ${n}:`);
    for (let i = 1; i <= 10; i++) {
        const result = n * i;
        console.log(`${n} × ${i} = ${result}`);
    }
    console.log(); // Empty line for spacing
}

// Main Program Execution
console.log('='.repeat(50));
console.log('Laboratory Activity 3: JavaScript Fundamentals 1');
console.log(`Base Number: ${BASE_NUMBER}`);
console.log('='.repeat(50));

// Problem 1: Grade Calculator
const score = BASE_NUMBER * 10 + 5; 
const grade = calculateGrade(score);
console.log(`\nProblem 1: Grade Calculator`);
console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);

// Problem 2: Star Pattern
const rows = BASE_NUMBER + 2; 
console.log(`\nProblem 2: Star Pattern`);
showStars(rows);

// Problem 3: Prime Number Checker
const numberToCheck = BASE_NUMBER + 10; 
const primeResult = isPrime(numberToCheck);
console.log(`Problem 3: Prime Number Checker`);
console.log(`Checking if ${numberToCheck} is prime: ${primeResult ? 'Yes, it is prime' : 'No, it is not prime'}`);

// Problem 4: Multiplication Table
console.log(`\nProblem 4: Multiplication Table`);
multiplicationTable(BASE_NUMBER);

console.log('='.repeat(50));
console.log('Program execution completed!');
console.log('='.repeat(50));
