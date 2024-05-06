const btn = document.getElementById("btn");
let links = document.querySelectorAll(".links");
const container = document.querySelector(".container");
links = Array.from(links);

console.log(links);
btn.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.toggle("active");

  });
  container.classList.toggle("active");
  btn.classList.toggle("active");
});
