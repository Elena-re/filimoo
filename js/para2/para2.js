const Paragraph2 = async () => {
  try {
    let data = await fetch("http://localhost:3000/para2");
    let res = await data.json();
    let paragraph2 = res.map((elem) => {
      return `<div><p>${elem.text}</p><img src=${elem.image} alt=${elem.alt}></div>`;
    });
    document
      .querySelector(".inside .second")
      .insertAdjacentHTML("beforeend", paragraph2.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Paragraph2;
