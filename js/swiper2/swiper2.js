const Slider2 = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider2");
    let res = await data.json();
    let slider2 = res.map((elem) => {
      return `<div class="swiper-slide">
                <div class="free"><p>${elem.text}</p><img src=${elem.image2} alt=${elem.alt2}></div>
                <img
                  src=${elem.image}
                  alt=${elem.alt}
                />

                <p>${elem.para}</p>
              </div>`;
    });
    document
      .querySelector(".mySwiper-2 .swiper-wrapper")
      .insertAdjacentHTML("beforeend", slider2.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider2;
