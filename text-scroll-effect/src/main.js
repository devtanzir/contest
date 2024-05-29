const main = document.querySelector(".main");
const section2 = document.querySelector(".section2");
const section2Heading = document.querySelector(".section2 h2");
const section3 = document.querySelector(".section3");
const section3Heading = document.querySelector(".section3 h2");
const section4 = document.querySelector(".section4");
const section4Heading = document.querySelector(".section4 h2");
const mainHeading = document.querySelector(".main h2");
document.onscroll = () => {
  const scrollVal = window.scrollY;

  if (scrollVal <= Math.ceil(main.clientHeight / 2.47)) {
    mainHeading.style.transform = `translateY(${scrollVal}px)`;
  } else {
    mainHeading.style.transform = `translateY(${Math.ceil(
      main.clientHeight / 2.47
    )})`;
  }
  if (
    scrollVal >= main.clientHeight &&
    scrollVal <= Math.ceil((main.clientHeight + section2.clientHeight) / 1.423)
  ) {
    section2Heading.style.transform = `translateY(${
      scrollVal - main.clientHeight
    }px)`;
  } else if (
    scrollVal >
      Math.ceil((main.clientHeight + section2.clientHeight) / 1.423) &&
    scrollVal < main.clientHeight + section2.clientHeight
  ) {
    section2Heading.style.transform = `translateY(${
      Math.ceil((main.clientHeight + section2.clientHeight) / 1.423) -
      main.clientHeight
    })`;
  } else if (
    scrollVal > main.clientHeight + section2.clientHeight &&
    scrollVal <
      Math.floor(
        (main.clientHeight + section2.clientHeight + section3.clientHeight) /
          1.288
      )
  ) {
    section3Heading.style.transform = `translateY(${
      scrollVal - (main.clientHeight + section2.clientHeight)
    }px)`;
  }
};
