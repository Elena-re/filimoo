const Paragraph3 = async () => {
  try {
    let data = await fetch("http://localhost:3000/para3");
    let res = await data.json();
    let paragraph3 = res.map((elem) => {
      return `<div><p>${elem.text}</p><img src=${elem.image} alt=${elem.alt}></div>`;
    });
    document
      .querySelector(".footer .second")
      .insertAdjacentHTML("beforeend", paragraph3.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Paragraph3;
