const Slider5 = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider5");
    let res = await data.json();
    let slider5 = res.map((elem) => {
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
      .querySelector(".mySwiper-5 .swiper-wrapper")
      .insertAdjacentHTML("beforeend", slider5.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider5;
