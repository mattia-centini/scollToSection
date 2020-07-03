//third attempt - WORKS
// it's not DRY but efficient with only few lines of code
//this works well in full screen - but in smaller screen section 3 & 4 are together
// button[0].addEventListener("click", () => {
//   window.scrollTo(0, sect0); //section[0].getBoundingClientRect().top;
// });
// button[1].addEventListener("click", () => {
//   window.scrollTo(0, sect1); //section[1].getBoundingClientRect().top;
// });
// button[2].addEventListener("click", () => {
//   window.scrollTo(0, sect2); //section[2].getBoundingClientRect().top;
// });
// button[3].addEventListener("click", () => {
//   //e.preventDefault(); //prevent default allowes me to continue clicking the buttons multiple times
//   window.scrollTo(0, sect3); //section[3].getBoundingClientRect().top;
// });

//// Second attempt - NOT WORKING
// button.forEach((button, index) => {
// button.addEventListener("click", () => { //calling the event click for each button
// if (button[index] == 0) { // im telling the program to scroll to the section Number equal to the button Index
//   window.scrollTo(0, sect0);
// } else if (button[index] == 1) { // i'm using an "else if" statement
//   window.scrollTo(0, sect1);
// } else if (button[index] == 2) {
//   window.scrollTo(0, sect2);
// } else if (button[index] == 3) {
//   window.scrollTo(0, sect3);
// } else console.log("error");
// });
// });

// // first attempt - not working
// // only works in full screen as it doubles the amount of my screen size 766px
// // once it gets to section 4 it stops
// let scroll = 766;
// let currentIndex = 1;
// button.forEach((button, index) => {
//   button.addEventListener("click", () => {
//     window.scrollTo(0, scroll);
//     scroll *= 2; //this only work on fullscreen as it double the vh
//     currentIndex++;
//     if (currentIndex == section.length) { //when i get to the end of the array
//       currentIndex = 1; // index restart from the beginning
//       window.scrollTo(0, 0); //
//     }
//   });
// });
