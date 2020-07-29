inView(".section1").on("enter", (section) => {
  document.querySelector(".glass1").classList.add("show");
  document.querySelector(".glass2").classList.remove("show");
  document.querySelector(".glass3").classList.remove("show");
});

inView(".section2").on("enter", (section) => {
  document.querySelector(".glass2").classList.add("show");
  document.querySelector(".glass1").classList.remove("show");
  document.querySelector(".glass3").classList.remove("show");
});

inView(".section3").on("enter", (section) => {
  document.querySelector(".glass3").classList.add("show");
  document.querySelector(".glass1").classList.remove("show");
  document.querySelector(".glass2").classList.remove("show");
});

inView("#intro").on("exit", () => {
  document.querySelector(".logo").classList.add("scaledown");
  document.querySelector(".set").classList.add("slideout");
  document.querySelector(".header").classList.add("new-padding");
  document.querySelector(".set").classList.remove("flex-column");
});

inView("#intro").on("enter", () => {
  document.querySelector(".logo").classList.remove("scaledown");
  document.querySelector(".set").classList.remove("slideout");
  document.querySelector(".set").classList.add("flex-column");
});

inView.threshold(0.5);
