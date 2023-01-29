setTimeout(() => {
    DOMSelectors.end.innerHTML = "";
    DOMSelectors.end.insertAdjacentHTML(
      "beforeend",
      `<button class="btn" id="reject">Reject</button>`
    );
  }, 19000);

  DOMSelectors.reject.addEventListener("click", getData);  
  async function getData() {
    const cat = "https://nekos.best/api/v2/neko";
    try {
      const response = await fetch(cat);
      if (response.status < 200 || response.status > 299) {
        console.log(response.status);
        throw error(response);
      } else {
        const data = await response.json();
  
        function displayNeko(){
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
      displayNeko(spawn);
      }
    } catch (error) {
      console.log(error);
      console.log("u suck");
      document.getElementById("display").textContent = "sorry, no neko for u";
    }
  }
  getData();