import React from "react";

const App = () => {

  // Find the max number character in a sentence

  const sentence = 'Hi there';

  const chars = {};
  let maxCount = 0;
  let maxChar = '';
  
  for(let char of sentence) {
    if(!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  console.log('Key value pairs', chars);

  for(let char in chars) {
    if(chars[char] > maxCount) {
      maxCount = chars[char];
      maxChar = char;
    }
  }

  console.log('Max count : ', maxCount);
  console.log('Max char : ', maxChar);
  

  return (
    <div>
      <h1>Algorithm questions</h1>
    </div>
  );
};

export default App;
