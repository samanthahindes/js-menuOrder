// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText) {
  var answerInput= prompt(questionText);
      order= order + answerInput;
  // your code goes here
}

// call the QUESTION function with the order options
question("Burrito, tacos, bowl, or salad?")
question("What kind of meat do you want?");
question("What type of rice do you want?");
question("What type of beans do you want?");
question("Do you want any sauces?");
question("Do you want any other toppings?");

// output their order
document.write("<p>You ordered: " + order + "<p>");
