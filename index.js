document.addEventListener("DOMContentLoaded", () => {
  //
  const section = [...document.querySelectorAll("section")];
  //const container = document.querySelector(".container");

  const measure = element => {
    const sectSize = element.getBoundingClientRect();
    const topValue = sectSize.top;
    const visibility = topValue >= 0;
    console.log("top is " + topValue);
    console.log("visibility " + visibility);
    return visibility;
  };

  const currSect = section.findIndex(measure); //findindex
  console.log("this is" + currSect);

  // function delta(e) {
  //   return e.deltaY > 0 ? 1 : -1;
  // }

  let index = 0;
  window.addEventListener("wheel", e => {
    const delta = e.wheelDelta;
    if (delta < 0) {
      section[index].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  //SCROLL WITH BUTTON
  const button = [...document.querySelectorAll(".button span")]; // turn node into array with spread operator

  button.forEach((item, index) => {
    item.addEventListener("click", () => {
      // console.log(item);
      // console.log(index);
      section[index].scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

//get to current section using function or method(scrollIntoView)
//check if the lenght of the section is not longer than our section[array]
//create timeout that stops the crazy scroll

//The deltaY property returns a positive (previous)value when scrolling down,
//and a negative (negative) value when scrolling up, otherwise 0.
