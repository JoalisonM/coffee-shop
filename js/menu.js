import allMenu from "./model/allMenu.js";

const loadMenu = () => {
  const menu = allMenu;

  for (let i = 0; i < 2; i++) {
    for (let item of menu) {
      createMenu(item);
    }
  }
};

const createMenu = (card) => {
  console.log(card);
  const cardCoffee = `
    <div class="coffeeGrid">
      <div class="coffeeImg">
        <img src="${card.img}" alt="${card.title}">
      </div>
      <div class="coffeeInfos">
        <p class="title">${card.title}</p>
        <small class="legend">${card.description}</small>
        <nav> 
          <p class="value">${card.price}</p>
          <button><img src="./images/shopping-bag 1.svg" alt="bag icon button"></button>
        </nav>
      </div>
    </div>
  `;

  const cardsGrid = document.querySelector(".cardsGrid");

  cardsGrid.insertAdjacentHTML('beforeend', cardCoffee);
};

loadMenu();