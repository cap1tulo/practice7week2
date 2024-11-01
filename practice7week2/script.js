// Task 1: String Casing
function askName() {
    let name = prompt("What is your name?");
    if (name) {
        name = name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        alert("Hello " + name);
    }
}

// Task 2: Life in Weeks
function lifeInWeeks() {
    const age = parseInt(document.getElementById("ageInput").value);
    if (!isNaN(age)) {
        const yearsLeft = 90 - age;
        const daysLeft = yearsLeft * 365;
        const weeksLeft = yearsLeft * 52;
        const monthsLeft = yearsLeft * 12;
        document.getElementById("lifeOutput").textContent = `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
    }
}

// Task 3: BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)).toFixed(1);
        let result;
        if (bmi < 18.5) {
            result = `Your BMI is ${bmi}, so you are underweight.`;
        } else if (bmi <= 24.9) {
            result = `Your BMI is ${bmi}, so you have a normal weight.`;
        } else {
            result = `Your BMI is ${bmi}, so you are overweight.`;
        }
        document.getElementById("bmiOutput").textContent = result;
    }
}

// Task 4: Who's Buying Lunch?
function whoIsBuying() {
    const names = ["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"];
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("lunchOutput").textContent = `${names[randomIndex]} is going to buy lunch today.`;
}

// Task 5: Fibonacci Sequence
function generateFibonacci() {
    const n = parseInt(document.getElementById("fibonacciInput").value);
    if (n > 0) {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        document.getElementById("fibonacciOutput").textContent = sequence.slice(0, n).join(", ");
    }
}
