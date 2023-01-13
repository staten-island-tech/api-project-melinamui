import "../styles/style.css";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);

//https://cdnb.artstation.com/p/assets/images/images/035/536/863/large/rasel-moe-world3.jpg?1615228697

/* DOMSelectors.display.innerHTML="";
  getData(cat);  
  load.preventDefault();*/

const cat = "https://nekos.best/api/v2/neko";

DOMSelectors.getneko.addEventListener("submit", (load) => getData(cat), false);
 
async function getData(cat) {
  try {
    const response = await fetch(cat);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();

      data.results.forEach((neko) => {
        document.getElementById("display").insertAdjacentHTML(
          "afterbegin",
          ` <div class ="card">
          <img class = "neko_image" src="${neko.url}" alt ="">
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
getData(cat);
