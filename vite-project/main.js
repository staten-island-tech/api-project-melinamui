import "./style.css";

const URL = "https://api.quotable.io/random";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
