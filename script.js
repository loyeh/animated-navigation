const btn = document.getElementById("btn");
let links = document.querySelectorAll(".links");
const container = document.querySelector(".container");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
links = Array.from(links);

console.log(links);
btn.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.toggle("active");

  });
  container.classList.toggle("active");
  btn.classList.toggle("active");
  line1.classList.toggle("active");
  line2.classList.toggle("active");
});
