document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('quadraticForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values
        let a = parseFloat(document.getElementById('a').value);
        let b = parseFloat(document.getElementById('b').value);
        let c = parseFloat(document.getElementById('c').value);
        let operator = document.getElementById('operator').value;

        // Solve the quadratic inequality
        solveQuadraticInequality(a, b, c, operator);
    });
});

function solveQuadraticInequality(a, b, c, operator) {
    // Construct the quadratic inequality text
    let inequalityText = `${a}x^2 + ${b}x + ${c} ${operator} 0`;

    // Display the quadratic inequality text
    displayInequality(inequalityText);

    // Calculate discriminant
    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        // Two real roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

        // Ensure root1 is the smaller root
        if (root1 > root2) [root1, root2] = [root2, root1];

        // Determine where the inequality holds true
        if (a > 0) {
            if (operator === '>') {
                displayResult(`x < ${root1} or x > ${root2}`);
            } else if (operator === '>=') {
                displayResult(`x <= ${root1} or x >= ${root2}`);
            } else if (operator === '<') {
                displayResult(`${root1} < x < ${root2}`);
            } else if (operator === '<=') {
                displayResult(`${root1} <= x <= ${root2}`);
            }
        } else if (a < 0) {
            if (operator === '>') {
                displayResult(`${root1} < x < ${root2}`);
            } else if (operator === '>=') {
                displayResult(`${root1} <= x <= ${root2}`);
            } else if (operator === '<') {
                displayResult(`x < ${root1} or x > ${root2}`);
            } else if (operator === '<=') {
                displayResult(`x <= ${root1} or x >= ${root2}`);
            }
        }
    } else if (discriminant === 0) {
        // One real root
        let root = -b / (2 * a);

        // Determine where the inequality holds true
        if (a > 0) {
            if (operator === '<' || operator === '<=') {
                displayResult(`x != ${root}`);
            } else {
                displayResult(`No solution`);
            }
        } else if (a < 0) {
            if (operator === '>' || operator === '>=') {
                displayResult(`x != ${root}`);
            } else {
                displayResult(`No solution`);
            }
        }
    } else {
        // No real roots
        if (a > 0) {
            if (operator === '<') {
                displayResult('No solution');
            } else if (operator === '<=') {
                displayResult('No solution');
            } else {
                displayResult('All x');
            }
        } else if (a < 0) {
            if (operator === '>') {
                displayResult('No solution');
            } else if (operator === '>=') {
                displayResult('No solution');
            } else {
                displayResult('All x');
            }
        }
    }
}

function displayInequality(text) {
    let quadraticInequality = document.getElementById('quadraticInequality');
    if (quadraticInequality) {
        quadraticInequality.innerHTML = text;
    } else {
        console.error('Element with ID "quadraticInequality" not found.');
    }
}

function displayResult(solution) {
    let resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = 'Solution: ' + solution;
    } else {
        console.error('Element with ID "result" not found.');
    }
}
