// Your code here
function mapToNegativize(sourceArray) {
  const newSourceArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newSourceArray.push(-1 * sourceArray[i]);
  }
  return newSourceArray;
}

function mapToNoChange(sourceArray) {
  const newSourceArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newSourceArray.push(sourceArray[i]);
  }
  return newSourceArray;
}

function mapToDouble(sourceArray) {
  const newSourceArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newSourceArray.push(2 * sourceArray[i]);
  }
  return newSourceArray;
}

function mapToSquare(sourceArray) {
  const newSourceArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newSourceArray.push(sourceArray[i] * sourceArray[i]);
  }
  return newSourceArray;
}

function reduceToTotal(sourceArray, startingPoint) {
  let reduceTotal = 0;
  if (!startingPoint) {
    for (let i = 0; i < sourceArray.length; i++) {
      reduceTotal += sourceArray[i];
    }
    return reduceTotal;
  } else {
    reduceTotal = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
      reduceTotal += sourceArray[i];
    }
    return reduceTotal;
  }
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (!src[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true;
  }
  return false;
}
