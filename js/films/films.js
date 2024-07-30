const Film = async () => {
  try {
    let data = await fetch("http://localhost:3000/film");
    let res = await data.json();
    let film = res.map((elem) => {
      return `<div class="apiDiv"><img src=${elem.image} alt=${elem.alt} /><img src=${elem.image2} alt=${elem.alt2} /></div>`;
    });
    document
      .querySelector(".contain .bottom .api")
      .insertAdjacentHTML("beforeend", film.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Film;
