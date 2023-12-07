// Asdignment 3

// qus num (1)Create an array of states in india.
//Remove all the names starting with vowels from the list. Use array.filter.
const indianStates = ["Andhra Pradesh", "Bihar", "Goa", "Karnataka", "Uttar Pradesh", "Odisha", "Tamil Nadu"];

const filteredStates = indianStates.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));

console.log(filteredStates);//output ["Bihar", "Goa", "Karnataka", "Tamil Nadu"]

/*qus num (3)let string = 'INDIA'
output = 'INDONESIA'
Use array.splice*/
let string = 'INDIA';
let outputArray = string.split('');
outputArray.splice(2, 0, 'O', 'N', 'E', 'S', 'I', 'A'); 

let output = outputArray.join(''); 
console.log(output); // output "INONESIADIA"

/*q7*/
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map(student => ({
  name: student.name,
  average: student.scores.reduce((total, score) => total + score, 0) / student.scores.length
}));

console.log(output);


/*q2*/ // asign 2 qs num 2
let string = 'INDIA';
let replacement = 'NESIA';
string = string.split('');
string.splice(1, 0, ...replacement);
string = string.join('');
console.log(string);


/*dout question*/
const inputArr = [1,2,3,9,10,7,5,4,3];
const answer = inputArr.filter(number=>number5);
console.log(answer);

//q(10)
//Write a function to reverse a string.
//Input - Hello
//Outpur - olleH
function reverseString(inputString) {
  return inputString.split('').reverse().join('');
}

const input = "Hello";
const output = reverseString(input);
console.log(output);//OUTPUT "OLLEH"

//q (2)
//let str = 'I love my India' 
//output expected = 'India my love I'
//Write code for this.
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');

console.log(reversedStr);//OUTPUT "India my love I"

// qus. (4)Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
function countConsonantsAndVowels(str) {
  const vowels = 'aeiouAEIOU';
  let consonantCount = 0;
  let vowelCount = 0;

  for (let char of str) {
      if (char.match(/[a-zA-Z]/)) {  
          if (vowels.includes(char)) {
              vowelCount++;
          } else {
              consonantCount++;
          }
      }
  }

  return { consonantCount, vowelCount };
}

const inputString = "ThisIsAStringWith20Characters";
const counts = countConsonantsAndVowels(inputString);

console.log("Consonant Count:", counts.consonantCount);
console.log("Vowel Count:", counts.vowelCount);

//output "consonant cont", 19
//"vowel count 8"

// answare 11
const input = [
  {
      student1: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
      }
  },
  {
      student2: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
      }
  },
  {
      student3: {
          subject1: 44,
          subject2: 56,
          subject3: 87,
          subject4: 97,
          subject5: 37
      }
  }
];

const output = input.map(studentData => {
  const studentName = Object.keys(studentData)[0];
  const subjects = Object.values(studentData[studentName]);
  const average = subjects.reduce((sum, mark) => sum + mark, 0) / subjects.length;
  return { [studentName]: { average: average } };
});

console.log(output);
/*output [{
  student1: {
    average: 64.2
  }
}, {
  student2: {
    average: 64.2
  }
}, {
  student3: {
    average: 64.2
  }
}]
*/


//qus 9 write a function to count the nuumber of words in a paragraph
function countWords(paragraph) {
    
  const trimmedParagraph = paragraph.trim();
  
  
  const wordsArray = trimmedParagraph.split(/\s+/);

   
  const numberOfWords = wordsArray.length;

  return numberOfWords;
}

const paragraph = "This is a sample paragraph with several words.";
const wordCount = countWords(paragraph);
console.log(wordCount);// output 8

// qus 8 write the function to find repeted sum of digite until there is only a single digite in the num .
// example 456-4+5+6=15-1+5=6
function repeatedSumOfDigits(number) {
  while (number >= 10) {
      
      const digitsArray = Array.from(String(number), Number);
const sum = digitsArray.reduce((acc, digit) => acc + digit, 0);
      number = sum;
  }

  return number;
}

const exampleNumber = 456;
const result = repeatedSumOfDigits(exampleNumber);
console.log(result);// output 6




