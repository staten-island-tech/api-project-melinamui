import "../styles/style.css";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import "./reject";

//https://cdnb.artstation.com/p/assets/images/images/035/536/863/large/rasel-moe-world3.jpg?1615228697


//reject no thanks
//okay how about this one

/*
setTimeout(() => {
  DOMSelectors.beginning.innerHTML = "";
  DOMSelectors.addButton.insertAdjacentHTML(
    "beforeend",
    `<button class="btn" id="getneko">Get Nekogirl!</button>`
  );
 
}, 13000)*/

//DOMSelectors.getneko.addEventListener("click", getData);  

function spawnNeko(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 19000);
  });
}

async function getData() {
  const cat = "https://nekos.best/api/v2/neko";
  try {
    const response = await fetch(cat);
    if (response.status < 200 || response.status > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      //const data = await response.json();
      //const spawn = await spawnNeko();
      const data = await response.json();
      const spawn = await spawnNeko();

      function displayNeko(){
      data.results.forEach((neko) => {
        DOMSelectors.display.innerHTML = "";
        document.getElementById("display").insertAdjacentHTML(
          "beforeend",
          ` <div class ="card">
          <img class = "neko_image" src="${neko.url}" alt ="This is a cute cat girl drawing made by artist, ${neko.artist_name}">
          <h2> Artist: ${neko.artist_name}</h2>
          </div>
          <h1> What do you think? </h1>
          `
        );
      });
    }
    displayNeko(spawn);
    }
  } catch (error) {
    console.log(error);
    console.log("u suck");
    document.getElementById("display").textContent = "sorry, no neko for u";
  }
}
getData();


setTimeout(() => {
  DOMSelectors.beginning.insertAdjacentHTML(
    "beforeend",
    `<h2 class="lost">You look like you have no friends.</h2>`
  );
}, 4000);

setTimeout(() => {
  DOMSelectors.beginning.innerHTML = "";
  DOMSelectors.beginning.insertAdjacentHTML(
    "beforeend",
    `<h1 class="lost">Let me help ;)</h1>`
  );
}, 8000);

setTimeout(() => {
  if (document.body.classList.contains("micro")) {
    document.body.classList.add("cafe");
    document.body.classList.remove("micro");
  } else {
    document.body.classList.add("micro");
    document.body.classList.remove("cafe");
  }
}, 12000);

setTimeout(() => {
  DOMSelectors.beginning.innerHTML = "";
  DOMSelectors.beginning.insertAdjacentHTML(
    "beforeend",
    `<h1 class="lost">Look we're here.</h1>`
  );
}, 12000);

setTimeout(() => {
  DOMSelectors.beginning.insertAdjacentHTML(
    "beforeend",
    `<h2 class="lost">Let me introduce you to my friend!</h2>`
  );
}, 15000);

setTimeout(() => {
  DOMSelectors.beginning.innerHTML = "";
  DOMSelectors.beginning.insertAdjacentHTML(
    "beforeend",
    `<h1 class="lost">Here she is!</h1>`
  );
}, 19000);

  

