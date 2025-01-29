let image = ["1.png", "2.png", "3.png", "4.png"];
window.addEventListener("load", () => {
  let i = 1;
  setInterval(() => {
    screenshot.style.opacity = 0.1;
    setTimeout(() => {
      screenshot.setAttribute("src", `images/${image[i]}`);
      screenshot.style.opacity = 1;
      i = (i + 1) % image.length;
    }, 400);
  }, 2400);
});