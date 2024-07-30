import Slider from "./swiper/swiper";
import Paragraph from "./paragraph/para";
import Film from "./films/films";
import Film2 from "./film2/film2";
import Slider2 from "./swiper2/swiper2";
import Slider3 from "./swiper3/swiper3";
import Slider5 from "./swiper5/swiper5";
import Paragraph2 from "./para2/para2";
import Comment from "./comment/comment";
import Paragraph3 from "./para3/para3";

function initSlider() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
function initSlider2() {
  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 6,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
function initSlider3() {
  var swiper = new Swiper(".mySwiper-3", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function initSlider5() {
  var swiper = new Swiper(".mySwiper-5", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function initSlider4() {
  var swiper = new Swiper(".mySwiper-4", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
let faded2 = document.querySelector(".faded2");
let faded = document.querySelector(".faded");
let api2 = document.querySelector(".api2");
let api = document.querySelector(".api");
let bttn = document.querySelector(".bttn");
let btn = document.querySelector(".btn");

api.addEventListener("click", function () {
  faded2.classList.toggle("faded2show");
  faded.classList.toggle("fadedhide");
});
api2.addEventListener("click", function () {
  faded2.classList.toggle("faded2show");
  faded.classList.toggle("fadedhide");
});

btn.addEventListener("click", function () {
  api2.classList.add("api2show");
});

bttn.addEventListener("click", function () {
  api2.classList.remove("api2show");
});

btn.addEventListener("click", function () {
  bttn.classList.remove("active");
  btn.classList.add("active");
});
bttn.addEventListener("click", function () {
  btn.classList.remove("active");
  bttn.classList.add("active");
});
let divButton = document.querySelector(".api");
divButton.addEventListener("click", function () {
  console.log("hi");
});

async function allData() {
  await Paragraph();
  await Slider();
  initSlider();
  Film();
  Film2();
  initSlider3();
  initSlider5();
  Slider3();
  Slider5();
  initSlider5();
  initSlider2();
  Slider2();
  Paragraph2();
  initSlider4();
  Comment();
  Paragraph3();
}
allData();
