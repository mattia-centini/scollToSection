document.addEventListener("DOMContentLoaded", () => {
  //
  const section = [...document.querySelectorAll("section")];
  const container = document.querySelector(".container");

  // const parag = document.createElement("p");
  // parag.innerText = "you have " + section.length + " section";
  // section[0].appendChild(parag);

  // const sect0 = section[0].getBoundingClientRect().top;
  // const sect1 = section[1].getBoundingClientRect().top;
  // const sect2 = section[2].getBoundingClientRect().top;
  // const sect3 = section[3].getBoundingClientRect().top;
  // console.log(sect3);

  // section.forEach((item) => {
  //   let top = item.getBoundingClientRect().top;
  //   console.log(top);
  // });

  // function hello(elem) {
  //   return elem.getBoundingClientRect().top;
  // }

  const measure = (element) => {
    const sectSize = element.getBoundingClientRect();
    const topValue = sectSize.top;
    //const starPosition = window.pageYOffset;
    //const distance = topValue - starPosition;
    //console.log("distance is " + distance);
    const visibility = topValue >= 0;
    console.log(visibility);
    return visibility;
  };

  const currSect = section.findIndex(measure); //findindex
  console.log(currSect);

  function delta(e) {
    return e.deltaY > 0 ? 1 : -1;
  }

  function anything() {
    if (delta() == 1) {
      console.log("true");
      const current = currSect - 1;
    }
  }

  //get to current section using function or method(scrollIntoView)
  //check if the lenght of the section is not longer than our section[array]
  //create timeout that stops the crazy scroll
  //The deltaY property returns a positive value when scrolling down, and a negative value when scrolling up, otherwise 0.

  //console.log(section.findIndex(measure));

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
