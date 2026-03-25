const container = document.getElementById("menu");

function displayMenu() {
  let categories = {};

  menuItems.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  for (let category in categories) {
    let section = document.createElement("div");

    let title = document.createElement("h2");
    title.innerText = category;
    section.appendChild(title);

    categories[category].forEach(item => {
      let div = document.createElement("div");
      div.className = "menu-item";

      div.innerHTML = `
        <h3>${item.name}</h3>
        <span class="price">${item.price}</span>
      `;

      section.appendChild(div);
    });

    container.appendChild(section);
  }
}

displayMenu();
