// To fetch a single product’s data from WordPress API

const url = "https://sugal.no/wp-json/wc/store/products";

const DetailsContainer = document.querySelector(".microLightJacket");
const DetailsContainerTwo = document.querySelector(".expeditionJacket");
const DetailsContainerThree = document.querySelector(".senjaJacket");
const DetailsContainerFour = document.querySelector(".ulrikenJacket");
const DetailsContainerFive = document.querySelector(".RainJacket");

async function fetchData() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  for (let i = 0; i < results.length; i++) {
    DetailsContainer.innerHTML += ` <a href="jacket-spesific.html?id=${results[i].id}"> 
  <img src="${results[i].images[0].src}" class="microlight-jacket_img" alt="  This is a Microlight Jacket">
  </a>
                                    <p class="jacket-name">${results[i].name}</p>
                                    <p class="jacket-color">${results[i].attributes[0].terms[0].name}
                                    <p class="jacket-price">kr ${results[i].prices.sale_price}</p>
  `;
  }
}
fetchData();
