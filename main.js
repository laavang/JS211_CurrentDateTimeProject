// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const covertToString = () => {
  
  const nonConvertedNumber = document.getElementById("numberInput").value;
  const convertedNumber = nonConvertedNumber.toString();
  
  if (typeof convertedNumber === "string") {
    console.log(convertedNumber + ' is now a string.');
    document.getElementById("display-string-conversion").innerHTML = convertedNumber + " is now a string.";
  }
  else {
    console.log("String conversion didn't work.");
    document.getElementById("display-string-conversion").innerHTML = "String conversion didn't work.";
  }
}




// Write a JavaScript program to convert a string to the number.


const covertToNumber = () => {
  
  const nonConvertedString = document.getElementById("stringInput").value;
  const convertedString = Number(nonConvertedString);
  
  if (typeof convertedString === "number") {
    console.log(convertedString + ' is now a number.');
    document.getElementById("display-number-conversion").innerHTML = convertedString + " is now a number.";
  }
  else {
    console.log("Number conversion didn't work.");
    document.getElementById("display-number-conversion").innerHTML = "Number conversion didn't work.";
  }
}





// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * boolean
  // * null
  // * undefined
  // * number
  // * NaN
  // * string


  const displayDataType = () => {
  
    const userInput = document.getElementById("userInput").value;
    const inputDataType = typeof userInput;
  
    console.log(inputDataType);
    
    if (inputDataType === "boolean") {
      document.getElementById("display-data-type").innerHTML = "Your input's datatype is a boolean";
    }
    else if (inputDataType === "null") {
      document.getElementById("display-data-type").innerHTML = "Your input's datatype is null.";
    }
    else if (inputDataType === "ndefined") {
      document.getElementById("display-data-type").innerHTML = "Your input's datatype is undefined.";
    }
    else if (inputDataType === "number") {
      document.getElementById("display-data-type").innerHTML = "Your input's datatype is a number.";
    }
    else if (inputDataType === "NaN") {
      document.getElementById("display-data-type").innerHTML = "Your input's datatype is NaN (not a number).";
    }
    else if (inputDataType === "string") {
      document.getElementById("display-data-type").innerHTML = "Your input's datatype is a string.";
    }
    else {
      document.getElementById("display-data-type").innerHTML = "Error.";
    }
  }
  
  

  
// Write a JavaScript program that adds 2 numbers together.

const addTwoNumbers = (num1, num2) => {

  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;

  const sum = parseInt(num1) + parseInt(num2); 
  console.log(sum);

  document.getElementById("display-sum").innerHTML = sum;

}



// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = (input1, input2) => {

  const a = document.getElementById("input1").value;
  const b = document.getElementById("input2").value;

  if (a && b) {
    document.getElementById("display-bothTrue").innerHTML = "Yes, your inputs are both truthy.";
  }
  else {
    document.getElementById("display-bothTrue").innerHTML = "No, your inputs aren't both truthy.";
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (input3, input4) => {

  let a = document.getElementById("input3").value.trim().toLowerCase();
  let b = document.getElementById("input4").value.trim().toLowerCase();

  console.log(a);
  console.log(b);


  if (a == "null" || a == "nan" || a == "undefined" || a == "false" || a == "" || a == '' || a == "0" || a == "-0") {
    a = null;
  }
  
  if (b == "null" || b == "nan" || b == "undefined" || b == "false" || b == "" || b == '' || b == "0" || b == "-0") {
    b = null;
  }


  console.log(a);
  console.log(b);

  console.log(typeof a);
  console.log(typeof b);

  if ((a && !b) || (!a && b)) {
    document.getElementById("display-oneTrue").innerHTML = "Yes, one of your inputs is truthy.";
  }
  else {
    document.getElementById("display-oneTrue").innerHTML = "No, both or none of your inputs are truthy.";
  }
}



// Write a JavaScript program that runs when both things are not true.  

const bothFalse = (input5, input6) => {

  let a = document.getElementById("input5").value.trim().toLowerCase();
  let b = document.getElementById("input6").value.trim().toLowerCase();

  console.log(a);
  console.log(b);


  if (a == "null" || a == "nan" || a == "undefined" || a == "false" || a == "" || a == '' || a == "0" || a == "-0") {
    a = null;
  }
  
  if (b == "null" || b == "nan" || b == "undefined" || b == "false" || b == "" || b == '' || b == "0" || b == "-0") {
    b = null;
  }

  console.log(a);
  console.log(b);

  console.log(typeof a);
  console.log(typeof b);

  if (!a && !b) {
    document.getElementById("display-bothFalse").innerHTML = "Yes, both of your inputs are falsey.";
  }
  else {
    document.getElementById("display-bothFalse").innerHTML = "No, your inputs are not both falsey.";
  }
}


// }



// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
