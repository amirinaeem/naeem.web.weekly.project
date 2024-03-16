const subBtn = document.querySelector(".btn-sub");
const commentBtn1 = document.querySelector(".replies");
const commentBtn2 = document.querySelector(".reply2");
const commentBtn3 = document.querySelector(".reply3");
const subContainer = document.querySelector(".sbs-container");
const comment1 = document.querySelector(".c1");
const comment2 = document.querySelector(".c2");
const comment3 = document.querySelector(".c3");

subBtn.addEventListener("click", () => {
  subContainer.style.display = "block";
});

commentBtn1.addEventListener("click", () => {
  comment1.classList.toggle("active");
});

commentBtn2.addEventListener("click", () => {
  comment2.classList.toggle("active");
});

commentBtn3.addEventListener("click", () => {
  comment3.classList.toggle("active");
});
