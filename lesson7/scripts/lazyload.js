//reference to all images
let imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the intersectionalObserver

//moves the path from data-src to src
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

//Loop through each img on checl status and load if necessary
imagesToLoad.forEach((img) => {
    loadImages(img);
});
