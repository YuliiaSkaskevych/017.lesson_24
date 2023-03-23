function newImage() {
  let _image = document.querySelector(".js--image");
  _image.src = `./images/` + Math.ceil(Math.random() * 9) + `.jpg`;
  _image.style.width = `${window.outerWidth}` * 1 + `px`;
}
newImage();