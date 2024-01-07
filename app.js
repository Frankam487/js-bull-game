const h3 = document.querySelector("h3");
let count = 0;

const bulles = () => {
  //creation d'une bulle
  const bulle = document.createElement("span");
  document.body.appendChild(bulle);
  bulle.classList.add("bulle");

  const size = Math.random() * 200 + 100 + "px";
  bulle.style.width = size;
  bulle.style.height = size;
//style randomisé
  bulle.style.top = Math.random() * 100 + 50 + "%";
  bulle.style.left = Math.random() * 100 + "%";
//style particulier
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bulle.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  setTimeout(() => {
    bulle.remove();
  }, 8000);


  bulle.addEventListener("click", () => {
    count++;
    h3.textContent = count;
    bulle.remove();
  });
};

setInterval(() => {
  bull();
}, 300);
