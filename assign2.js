// qus 1 write the code to display from 1 to 100 but just even
for (let number = 2; number <= 100; number += 2) {
  console.log(number);
}
// output 

2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42
44
46
48
50
52
54
56
58
60
62
64
66
68
70
72
74
76
78
80
82
84
86
88
90
92
94
96
98
100 
// output


//qus num (2) write a function to calcute which can add, subset, multiply, and divide two numbers. use switch inside function
function calculate(operation, num1, num2) {
  let result;

  switch (operation) {
      case 'add':
          result = num1 + num2;
          break;
      case 'subtract':
          result = num1 - num2;
          break;
      case 'multiply':
          result = num1 * num2;
          break;
      case 'divide':
          if (num2 !== 0) {
              result = num1 / num2;
          } else {
              result = 'Cannot divide by zero';
          }
          break;
      default:
          result = 'Invalid operation';
  }

  return result;
}

// Example usage:
console.log(calculate('add', 5, 3));       // Output: 8
console.log(calculate('subtract', 8, 2));  // Output: 6
console.log(calculate('multiply', 4, 7));  // Output: 28
console.log(calculate('divide', 10, 2));   // Output: 5
console.log(calculate('divide', 7, 0));    // Output: Cannot divide by zero
console.log(calculate('power', 2, 3));     // Output: Invalid operation

/*qus (3) You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.
//if 500000 >= salary > 0 then 0% tax on the entire salary.
//If 1000000 >= salary > 500000 then 10% tax on the entire salary.
//If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
If the salary > 1500000 then 30% tax on the entire salary. */
function findTax(salary) {
  let taxRate;
  let taxAmount;

  switch (true) {
      case (salary > 0 && salary <= 500000):
          taxRate = 0;
          break;
      case (salary > 500000 && salary <= 1000000):
          taxRate = 0.1;
          break;
      case (salary > 1000000 && salary <= 1500000):
          taxRate = 0.2;
          break;
      case (salary > 1500000):
          taxRate = 0.3;
          break;
      default:
          taxRate = 0;
  }

  taxAmount = salary * taxRate;
  return taxAmount;
}

// Example usage:
const salary1 = 400000;
const salary2 = 800000;
const salary3 = 1200000;
const salary4 = 1600000;

console.log("Tax for salary $", salary1, ":", findTax(salary1));
console.log("Tax for salary $", salary2, ":", findTax(salary2));
console.log("Tax for salary $", salary3, ":", findTax(salary3));
console.log("Tax for salary $", salary4, ":", findTax(salary4))
// output
//"Tax for salary $", 400000, ":", 0
//"Tax for salary $", 800000, ":", 80000
//"Tax for salary $", 1200000, ":", 240000
//"Tax for salary $", 1600000, ":", 480000 


//qus num (4) Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
function sumOfProducts(n1, n2) {
  const digits1 = Array.from(String(n1), Number);
  const digits2 = Array.from(String(n2), Number);

  let sum = 0;

  for (let i = 0; i < Math.max(digits1.length, digits2.length); i++) {
      const digit1 = digits1[i] || 0;
      const digit2 = digits2[i] || 0;
      sum += digit1 * digit2;
  }

  return sum;
}


const n1 = 6;
const n2 = 34;
const result = sumOfProducts(n1, n2);
console.log(result); // output 18

