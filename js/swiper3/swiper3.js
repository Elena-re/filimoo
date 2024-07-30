const Slider3 = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider3");
    let res = await data.json();
    let slider3 = res.map((elem) => {
      return `<div class="swiper-slide">
      <img
      src=${elem.image}
      alt=${elem.alt}
      />
      <section><img src=${elem.image2} alt=${elem.alt2}></section>
                    <p>${elem.para}</p>
                </div>

                `;
    });
    document
      .querySelector(".mySwiper-3 .swiper-wrapper")
      .insertAdjacentHTML("beforeend", slider3.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider3;
