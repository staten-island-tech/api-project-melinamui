import "../styles/style.css";
import { DOMSelectors } from "./dom";
console.log(DOMSelectors);
import "./reject";

//https://cdnb.artstation.com/p/assets/images/images/035/536/863/large/rasel-moe-world3.jpg?1615228697
//https://media.istockphoto.com/id/925770730/photo/white-fan-blades-with-shadows.jpg?s=612x612&w=0&k=20&c=LxjVcd0Z4e15cKxnOSOGbuLiWcH6FWExEaFd4aD8axY=

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
    }, 18000);
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
          <button class="btn" id="reject">Reject :(</button>
          <button class="btn" id="perfect"> Perfect :O</button>
          `
        );
      });
      document.getElementById("perfect").addEventListener("click", function(){
        DOMSelectors.display.innerHTML = "";
        DOMSelectors.beginning.innerHTML = "";
        if (document.body.classList.contains("cafe")) {
          document.body.classList.add("ceiling");
          document.body.classList.remove("cafe");
        } else {
          document.body.classList.add("cafe");
          document.body.classList.remove("ceiling");
        }
       DOMSelectors.beginning.insertAdjacentHTML(
        "beforeend",
        `<h1>...</h1>
        <h4>The End.</h4>`
       )
      });

      document.getElementById("reject").addEventListener("click", getData);
      document.getElementById("reject").addEventListener("click", function() {
        DOMSelectors.display.innerHTML = "";
        DOMSelectors.beginning.innerHTML = "";
        DOMSelectors.beginning.insertAdjacentHTML(
          "beforeend",
          `<h1>Aww, what a shame.</h1>
          <h2>How about her?</h2>
          <h3>Wait a bit, she's running here >:(</h3>`
        )}
        ); 
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
}, 18000);

  

