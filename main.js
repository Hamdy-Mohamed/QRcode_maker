let img = document.querySelector("img"),
  input = document.querySelector("input"),
  btn = document.querySelector("button"),
  api = "https://api.qrserver.com/v1/",
  api2 = "create-qr-code/?size=150x150&data=";

btn.addEventListener("click", () => {
  img.src = `${api}${api2}${input.value}`;
});

let oneSecond = "1000";
let fewSeconds = oneSecond * 15;
btn.addEventListener("mousemove", () => {
  setInterval(() => {
    btn.style.animationName = "path";
    btn.innerHTML = "Contact";
    btn.style.color = "yellow";
  }, fewSeconds);
});

// social Media
const facebook = document.querySelector("#facebook"),
  github = document.querySelector("#github"),
  twitter = document.querySelector("#twitter"),
  linkedin = document.querySelector("#linkedin");

facebook.onclick = () => {
  window.open("https://www.facebook.com/hamdy.elgokar.5");
};

github.onclick = () => {
  window.open("https://github.com/Hamdy-Mohamed");
};
twitter.onclick = () => {
  window.open("https://twitter.com/HamdyMohamedd1");
};
linkedin.onclick = () => {
  window.open("https://www.linkedin.com/in/hamdy-abdal-majeed-b67b32246/");
};
