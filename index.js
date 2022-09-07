
// menu-data

const foodList = [
    {
        id:1,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price: 20,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:2,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'second data',
        price: 220,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:3,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price: 48,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:4,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price: 50,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:5,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price: 60,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:6,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price: 90,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:7,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price: 100,
        desccription: 'Menu for in-restaurant dining only',

    },
    {
        id:8,
        img: 'https://images.unsplash.com/photo-1662401176469-b546709da043?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'first data',
        price:120,
        desccription: 'Menu for in-restaurant dining only',

    }
]


const allBtn = document.querySelector("#all");
const breakBtn = document.querySelector("#break");
const lunchBtn = document.querySelector("#lunch");
const brunchBtn = document.querySelector("#brunch");
const dinnerBtn = document.querySelector("#dinner");


// all btn
allBtn.addEventListener('click', () =>{
    
    let allfoods = foodList.map((item) => {
        price = price.innerHTML;
        console.log('clicked');
        console.log(allfoods);
    })
    
})

// breakfast
breakBtn.addEventListener('click', () =>{
    console.log('clicked');
})

// lunch
lunchBtn.addEventListener('click', () =>{
    console.log('clicked');
})

// brunch
brunchBtn.addEventListener('click', () =>{
    console.log('clicked');
})

// dinner
dinnerBtn.addEventListener('click', () =>{
    console.log('clicked');
})