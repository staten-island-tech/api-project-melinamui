import "./style.css";

const cat = "https://nekos.best/api/v2/neko";

async function getData(cat) {
  try {
    const response = await fetch(cat);
    if (response.status < 200 || response.statusn > 299) {
      console.log(response.status);
      throw error(response);
    } else {
      const data = await response.json();

      data.result.forEach((neko) => {
        document.getElementById("display").insertAdjacentHTML(
          "afterbegin",
          ` <div class ="card">
          <h1>${neko.artist_name}</h1>
          <img src="${neko.url}" alt ="">
          </div>`
        );
      });
    }
  } catch (error) {
    console.log(error);
    console.log("u suck");
    document.getElementById("display").textContent = "no neko for u";
  }
}
getData(cat);
