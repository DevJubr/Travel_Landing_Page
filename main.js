let burget = document.querySelector(".burgers");
const menu = document.querySelector(".nav_list_con");

burget.addEventListener("click", () => {
  console.log("active");
  burget.classList.toggle("active");
  menu.classList.toggle("active");
});
