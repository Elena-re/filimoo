const Paragraph = async () => {
  try {
    let data = await fetch("http://localhost:3000/para");
    let res = await data.json();
    let paragraph = res.map((elem) => {
      return `<div><p>${elem.text}</p><img src=${elem.image} alt=${elem.alt}></div>`;
    });
    document
      .querySelector(".middle .second")
      .insertAdjacentHTML("beforeend", paragraph.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Paragraph;
