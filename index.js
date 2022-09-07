// menu-data

const foodList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "first data",
    price: 20,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "second data",
    price: 220,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    title: "first data",
    price: 48,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "first data",
    price: 50,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "first data",
    price: 60,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "first data",
    price: 90,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
    title: "first data",
    price: 100,
    desccription: "Menu for in-restaurant dining only",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    title: "first data",
    price: 120,
    desccription: "Menu for in-restaurant dining only",
  },
];


const asideSection = document.querySelector('#sectionCenter');


const allBtn = document.querySelector("#all");
const breakBtn = document.querySelector("#break");
const lunchBtn = document.querySelector("#lunch");
const brunchBtn = document.querySelector("#brunch");
const dinnerBtn = document.querySelector("#dinner");

// all btn
allBtn.addEventListener("click", () => {
  let allfoods = foodList.map((item) => {

    return `<div class="card">
    <div class="single-card">
        <div class="card-image">
            <img src=${item.img} alt=${item.title}>
    </div>
    <div class="card-data">
        <div class="card-title">
            <p>${item.title}</p>
            <p>Rs.${item.price}</p>
        </div>
        <div class="card-text">
            <p>${item.desccription}.</p>
        </div>
        </div>
    </div>
    </div>
</div> 
    `;
  });


  allfoods = allfoods.join('');
  asideSection.innerHTML = allfoods;
  console.log(allfoods);
});

// breakfast
breakBtn.addEventListener("click", () => {
  console.log("clicked");

  let allfoods = foodList

});

// lunch
lunchBtn.addEventListener("click", () => {
  console.log("clicked");
});

// brunch
brunchBtn.addEventListener("click", () => {
  console.log("clicked");
});

// dinner
dinnerBtn.addEventListener("click", () => {
  console.log("clicked");
});
