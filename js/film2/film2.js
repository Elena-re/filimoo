const Film2 = async () => {
  try {
    let data = await fetch("http://localhost:3000/film2");
    let res = await data.json();
    let film2 = res.map((elem) => {
      return `<div><img src=${elem.image} alt=${elem.alt} /><img src=${elem.image2} alt=${elem.alt2} /></div>`;
    });
    document
      .querySelector(".contain .bottom .api2")
      .insertAdjacentHTML("beforeend", film2.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Film2;
