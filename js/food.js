document.getElementById("load-all-data").addEventListener("click", function() {
  container.innerHTML = "";
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => displayFoodCategories(data.categories));
});

const displayFoodCategories = categories => {
  const container = document.getElementById("container");
  for (const category of categories) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
    <img src=${category.strCategoryThumb} alt=""/> 
        <p><span class="description">Description:</span> ${category.strCategoryDescription.slice(
          0,
          150
        )}</p>
    `;
    container.appendChild(div);
  }
};

document
  .getElementById("breakfast-data-load")
  .addEventListener("click", function() {
    container.innerHTML = "";
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => displayBreakfastCategories(data.categories));
  });

const displayBreakfastCategories = categories => {
  const container = document.getElementById("container");
  let match = categories.filter(category =>
    category.strCategory.toString().includes("Breakfast")
  );

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src=${match[0].strCategoryThumb} alt=""/> 
        <p><span class="description">Description:</span> ${match[0].strCategoryDescription.slice(
          0,
          150
        )}</p>
    `;
  container.appendChild(div);
};

document.getElementById("beef-data-load").addEventListener("click", function() {
  container.innerHTML = "";
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(data => displayBeefCategories(data.categories));
});

const displayBeefCategories = categories => {
  const container = document.getElementById("container");
  let matchBeef = categories.filter(category =>
    category.strCategory.toString().includes("Beef")
  );

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src=${matchBeef[0].strCategoryThumb} alt=""/> 
        <p><span class="description">Description:</span> ${matchBeef[0].strCategoryDescription.slice(
          0,
          150
        )}</p>
    `;
  container.appendChild(div);
};

document
  .getElementById("seafood-data-load")
  .addEventListener("click", function() {
    container.innerHTML = "";
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => res.json())
      .then(data => displaySeafoodCategories(data.categories));
  });

const displaySeafoodCategories = categories => {
  const container = document.getElementById("container");
  let matchSeafood = categories.filter(category =>
    category.strCategory.toString().includes("Seafood")
  );

  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
      <img src=${matchSeafood[0].strCategoryThumb} alt=""/> 
          <p><span class="description">Description:</span> ${matchSeafood[0].strCategoryDescription.slice(
            0,
            150
          )}</p>
      `;
  container.appendChild(div);
};
