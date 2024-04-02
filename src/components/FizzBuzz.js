import React from "react";

const FizzBuzz = () => {

  // fizz buzz problem
  
// For numbers divisible by 3, print "Fizz" instead.
// For numbers divisible by 5, print "Buzz" instead.
// For numbers divisible by both 3 and 5, print "FizzBuzz" instead.
// For numbers not divisible by either 3 or 5, print the number itself.

    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }

  return (
    <div>
      <h1>FIZZBUZZ</h1>
    </div>
  );
};

export default FizzBuzz;
