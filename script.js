const container = document.querySelector(".container");
const links = document.querySelectorAll(".links");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const btn = document.getElementById("btn");

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
