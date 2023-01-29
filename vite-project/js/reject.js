import { DOMSelectors } from "./dom";
/*
setTimeout(() => {
    DOMSelectors.end.innerHTML = "";
    DOMSelectors.end.insertAdjacentHTML(
      "beforeend",
      `<button class="btn" id="reject">Reject</button>`
    );
    DOMSelectors.reject.addEventListener("click", getAnother); 
  }, 19000);

function spawnAnother(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 19000);
    });
  }

  async function getAnother() {
    const cat = "https://nekos.best/api/v2/neko";
    try {
      const response = await fetch(cat);
      if (response.status < 200 || response.status > 299) {
        console.log(response.status);
        throw error(response);
      } else {
        const data = await response.json();
        const spawn = await spawnAnother();
  
        function displayAnother(){
        data.results.forEach((neko) => {
          DOMSelectors.display.innerHTML = "";
          document.getElementById("display").insertAdjacentHTML(
            "beforeend",
            ` 
            <h1>Aww that's a shame.</h1>
            <h2>How about her?</h2>
            <div class ="card">
            <img class = "neko_image" src="${neko.url}" alt ="This is a cute cat girl drawing made by artist, ${neko.artist_name}">
            <h2> Artist: ${neko.artist_name}</h2>
            </div>
            `
          );
        });
      }
      displayAnother(spawn);
      }
    } catch (error) {
      console.log(error);
      console.log("u suck");
      document.getElementById("display").textContent = "sorry, no neko for u";
    }
  }
*/