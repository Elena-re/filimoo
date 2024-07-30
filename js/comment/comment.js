const Comment = async () => {
  try {
    let data = await fetch("http://localhost:3000/commnets");
    let res = await data.json();
    let comment = res.map((elem) => {
      return `<div class="swiper-slide">
                <section>
                <img src=${elem.image2} alt=${elem.alt2}>
                <p>${elem.name}</p>
                <img src=${elem.image} alt=${elem.alt}>
                </section>
                <p>${elem.text}</p>
              </div>`;
    });
    document
      .querySelector(".mySwiper-4 .swiper-wrapper")
      .insertAdjacentHTML("beforeend", comment.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Comment;
