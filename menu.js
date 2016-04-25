// begin with a blank/new order
// var order = '';
//
//
// // build a function to ask questions
//
// function question(questionText) {
//   var answerInput= prompt(questionText);
//       order= order + " " + answerInput;
//   // your code goes here
// }
//
// // call the QUESTION function with the order options
// question("Do you want a hamburger or a cheeseburger")
// question("french fries or animal fries?");
// question("chocolate, strawberry, or vanilla milkshake?");

// output their order
//document.write("<p>You ordered: " + order + "<p>");

var myQuestions= [
  "Do you want a hamburger or a cheeseburger?",
  "french fries or animal fries?",
  "chocolate, strawberry, or vanilla milkshake?"
]

var i=0;
var order= '';
while (i<myQuestions.length){
  var answerInput= prompt(myQuestions[i]);
  order= order + " " + answerInput;
  i++;
}

document.write("<p>You ordered: " + order + "<p>");
