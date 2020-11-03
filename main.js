// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const rowElements = document.querySelectorAll(".row");

function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}

replaceAllButton.addEventListener("click", function () {
  //   console.log("hello");
  let enteredItem = findInput.value;
  let changedItem = replaceInput.value;

  for (let i = 0; i < rowElements.length; i++) {
    let currentRowElement = getCellElements(rowElements[i]);
    // console.log(currentRowElement);
    for (let j = 0; j < currentRowElement.length; j++) {
      let cellInfo = currentRowElement[j];
      //   console.log(cellInfo.innerHTML);
      if (cellInfo.innerHTML.includes(enteredItem)) {
        cellInfo.innerHTML.replace(enteredItem, changedItem);
      }
      console.log(changedItem);
    }
  }
});

// YOUR CODE GOES HERE

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
