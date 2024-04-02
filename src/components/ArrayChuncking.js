import React from "react";

const ArrayChuncking = () => {
  // Array chanking

  // input : [[1,2,3,4], 2]
  // output : [[1,2],[3,4]]

  const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
  const chunkSize = 2;
  let updatedArray = [];

  for (let item of inputArray) {
    let last = updatedArray[updatedArray.length - 1];

    if (!last || last.length === chunkSize) {
      updatedArray.push([item]);
    } else {
      last.push(item);
    }
  }

  console.log(updatedArray);

  return (
    <div>
      <h1>ARRAY CHUNCKING</h1>
    </div>
  );
};

export default ArrayChuncking;
