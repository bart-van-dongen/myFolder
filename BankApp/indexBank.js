
//links Element to id's
const laptopsElement = document.getElementById("laptops");
const priceElement = document.getElementById("price");
const discriptionElement = document.getElementById("discription");
const addElement = document.getElementById("add");
const cartElement = document.getElementById("cart");
const quantityElemnt = document.getElementById("quantity");
const payButtonElement = document.getElementById("pay");
const totalDueElement = document.getElementById("totalDue");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");


//makes a array from the database to use
let laptops = [];

//makes a array list of: laptop name, cost, quantity and total
let cart = [];

//display the total due in laptop block
let totalDue = 0.0;

//fetch database from heroku to get laptops data 
fetch("https://noroff-komputer-store-api.herokuapp.com/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(laptops => addLaptopsToMenu(laptops));

//links select to laptops and displays fist laptop without selecting one  
const addLaptopsToMenu = (laptops) => {
    laptops.forEach(x => addLaptopToMenu(x));
    priceElement.innerText = laptops [0].price;
    discriptionElement.innerText = laptops [0].description;
    titleElement.innerText = laptops [0].title;
    imageElement.innerHTML = laptops [0].image;
}    
//add the difference laptops titles in select  
const addLaptopToMenu = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopsElement.appendChild(laptopElement);
}
//displays the difference laptop info: price, description, title, image 
const handleLaptopMenuChange = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];
    priceElement.innerText = selectedLaptop.price;
    discriptionElement.innerText = selectedLaptop.description;
    titleElement.innerText = selectedLaptop.title;
    imageElement.innerHTML = selectedLaptop.image;
}

 // add laptop to cart when pressing "add to cart" button
const handleAddLaptop = () => {
    const selectedLaptop = laptops [laptopsElement.selectedIndex]
    const quantity = parseInt(quantityElemnt.value);

    const cartItem = document.createElement("li");
    const lineTotal = quantity * selectedLaptop.price;

    cartItem.innerText = (`${selectedLaptop.title} ${selectedLaptop.price} ${quantity} ${lineTotal}`);
    cartElement.appendChild(cartItem);

    totalDue += lineTotal;
    totalDueElement.innerHTML = `Total due: ${totalDue.toFixed(2)}`;
}

//calls a pop up so you can fill in your payment
const handlePay = () =>{
    const totalPaid = prompt("please enter the amount of money you wish to pay: ");
    const change = parseFloat (totalPaid) - totalDue;
    alert(`total change due: ${change.toFixed(2)}`);
}

//links Element to id's
laptopsElement.addEventListener("change",  handleLaptopMenuChange);
addElement.addEventListener("click", handleAddLaptop);
payButtonElement.addEventListener("click", handlePay);


//balance of Jackie Chan (bank)
let balance = 0.0

//pay of work
let payBalance = 0.0

const workElement = document.getElementById("work");


const handleAddWork = () =>{   
  
    //  salary = parseInt(salary + 100);
      //payment.innerHTML = salary;
    
    const work= 100;
    
    payBalance += work;
    payBalanceElement.innerHTML = `pay: ${payBalance.toFixed(2)}`;
}

workElement.addEventListener("click", handleAddWork);