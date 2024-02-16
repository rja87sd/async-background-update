"use strict";

// In script.js, define the delay function as shown in the demo:
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Write an async function in script.js that changes the background color of the body element of the webpage.
async function changeBackgroundColor() {
  try {
    // The function should change the color three times, with each color lasting for 5 seconds before switching to the next one.
    // Utilize the delay function to control the timing.
    await delay(5000);
    document.querySelector("body").style.backgroundColor = "black";

    // Utilize the delay function to control the timing.
    await delay(5000);
    document.querySelector("body").style.backgroundColor = "lightgray";

    // Utilize the delay function to control the timing.
    await delay(5000);
    document.querySelector("body").style.backgroundColor = "gray";
  } catch (error) {
    console.log(error);
  }
}
changeBackgroundColor();
