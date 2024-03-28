let Key = "31f7ae5668814a0aa8bd529b0fea875d";
let cardData = document.querySelector(".cardData");
let searchbtn = document.getElementById("searchbtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");
const getData = async (input) => {
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=${input}&apiKey=${Key}`
  );
  let jsonData = await res.json();
  console.log(jsonData.articles);
  searchType.innerText = "Search:" + input;
  inputData.value = "";
  cardData.innerHTML = "";
  jsonData.articles.forEach(function (article) {
    console.log(article);
    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);
    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>`;
    divs.addEventListener("click", function () {
      window.open(article.url);
    });
  });
};
window.addEventListener("load", function () {
  getData("India");
});

searchbtn.addEventListener("click", function () {
  let inputText = inputData.value;
  getData(inputText);
});
function navClick(navName) {
  document.getElementById("Politics").style.color =
    navName === "Politics" ? "rgb(0,140,255)" : "white";
  document.getElementById("Sports").style.color =
    navName === "Sports" ? "rgb(0,140,255)" : "white";
  document.getElementById("Technology").style.color =
    navName === "Technology" ? "rgb(0,140,255)" : "white";

  getData(navName);
}
