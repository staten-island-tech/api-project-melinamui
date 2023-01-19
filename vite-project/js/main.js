import "../styles/style.css";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);

//https://cdnb.artstation.com/p/assets/images/images/035/536/863/large/rasel-moe-world3.jpg?1615228697


function openingText() {
  DOMSelectors.beginning.innerHTML = "";
  DOMSelectors.beginning.insertAdjacentHTML(
    "beforeend",
    `<h1 class="lost">I see you've lost your way...</h1>`
  );
}
setTimeout(openingText, 10000);

DOMSelectors.getneko.addEventListener("click", getData);

async function getData() {
  const cat = "https://nekos.best/api/v2/neko";
  try {
    const response = await fetch(cat);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();

      data.results.forEach((neko) => {
        DOMSelectors.display.innerHTML = "";
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          ` <div class ="card">
          <img class = "neko_image" src="${neko.url}" alt ="This is a cute cat girl drawing made by artist, ${neko.artist_name}">
          <h3> Artist: ${neko.artist_name}</h3>
          </div>`
        );
      });
    }
  } catch (error) {
    console.log(error);
    console.log("u suck");
    document.getElementById("display").textContent = "sorry, no neko for u";
  }
}
